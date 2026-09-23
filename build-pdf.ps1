# Regenerates Kian-Zarazvand-Portfolio.pdf from print.html (content comes from data.js).
# Run after editing data.js:   powershell -ExecutionPolicy Bypass -File build-pdf.ps1
$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$out  = Join-Path $root 'Kian-Zarazvand-Portfolio.pdf'

$browser = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw 'Edge or Chrome is required.' }

# Serve the folder so fonts and relative paths load exactly as on the live site.
$port = 8799
$server = Start-Process python -ArgumentList '-m', 'http.server', $port, '--directory', "`"$root`"" -PassThru -WindowStyle Hidden
try {
  Start-Sleep -Seconds 1
  $profileDir = Join-Path $env:TEMP 'kz-pdf-profile'
  $edgeArgs = @('--headless=new', '--disable-gpu', '--no-first-run', "--user-data-dir=`"$profileDir`"",
            '--no-pdf-header-footer', '--virtual-time-budget=15000',
            "--print-to-pdf=`"$out`"", "http://localhost:$port/print.html")
  Start-Process $browser -ArgumentList $edgeArgs -Wait -WindowStyle Hidden
  $i = 0; while (-not (Test-Path $out) -and $i -lt 30) { Start-Sleep -Milliseconds 500; $i++ }
  Get-Item $out | Select-Object Name, @{n='KB'; e={[int]($_.Length / 1KB)}}, LastWriteTime
} finally {
  Stop-Process -Id $server.Id -Force -ErrorAction SilentlyContinue
}

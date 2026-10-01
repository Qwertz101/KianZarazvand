/* Kian Zarazvand — portfolio content
 * All copy lives in this file: SECTIONS (project groups), LEADERSHIP, PANELS
 * ELEVATOR and TIMELINE. Shared by the site (script.js) and the PDF (print.js).
 *
 * Every media item has a stage: analysis, cad, prototype, built or field.
 * Galleries and process strips group and order photos by it.
 *
 * Media entries take either { src, alt } for an image or
 * { video, poster, alt } for a clip. The first entry is the tile thumbnail.
 */

const SECTIONS = [
  {
    id: 'fsae',
    eyebrow: 'UCR Formula SAE',
    title: 'Formula SAE suspension',
    intro: 'I joined the UC Riverside Formula SAE team on the suspension sub-team. As an intern I completed a V6 engine CAD project and a control arm project; now, as an associate engineer, I run the carbon fiber pushrod project — R&D on carbon structures and adhesive bonding for future full-carbon control arms.',
    projects: [
      {
        id: 'pushrod',
        eyebrow: 'UCR Formula SAE',
        title: 'Carbon fiber pushrod',
        short: 'May 2026 · associate engineer',
        meta: 'Associate Engineer, Suspension · May 2026',
        media: [
          { stage: 'analysis', src: 'images/pushrod-optimizer.png', alt: 'MATLAB contour plot of total assembly mass against tube outer diameter and wall thickness, with buckling, insert yield and glue shear boundaries and the optimum marked at 20.65 mm diameter and 0.75 mm wall' }
        ],
        lead: 'A pushrod only has to carry axial load, which makes it the ideal first part to move from steel to a bonded carbon tube. I wrote a MATLAB optimizer that sweeps tube diameter and wall thickness against global buckling, insert yield and glue shear limits, then sized the insert and bond length from the result.',
        design: [
          'MATLAB optimizer for tube sizing and wall thickness — 4.005 kN design load with split safety factors (buckling FoS 2.5, insert yield FoS 3.0, glue shear FoS 3.0).',
          'Optimum landed at 20.65 mm outer diameter, 0.75 mm wall and a 10.24 mm insert length for a 50.2 g assembly.',
          'FEA-optimized aluminum insert.',
          'Epoxy bonding research and development for the tube-to-insert joint.'
        ],
        functionality: [
          '60% lighter than the prior steel pushrod.',
          'Lowers unsprung mass for better vehicle dynamics.',
          'Proves out the carbon structure and adhesive bonding for future full carbon fiber control arms.'
        ],
        tags: ['MATLAB', 'Optimization', 'Carbon fiber', 'Epoxy bonding', 'FEA']
      },
      {
        id: 'controlarm',
        eyebrow: 'UCR Formula SAE',
        title: 'Carbon fiber control arm',
        short: 'Jan 2026 · intro project',
        meta: 'Suspension Intern · January 2026',
        media: [
          { stage: 'cad', src: 'images/control-arm.jpg', alt: 'CAD render of a carbon fiber A-arm mounted to the tubular chassis with a billet upright bracket' },
          { stage: 'cad', src: 'images/control-arm-closeup.jpg', alt: 'Close-up of the machined steel insert joining two carbon fiber tubes with a rod end' }
        ],
        lead: 'Suspension for a Formula Student car has to be light enough to matter and stiff enough to survive a season of testing. This intro project took the control arm from skeleton model through FEA to a preliminary carbon fiber design bonded into billet inserts.',
        design: [
          'Skeleton modeling, FEA simulations and stress calculations with Design for Manufacturability in mind.',
          'Steel tabs to attach to the chassis.',
          'Billet steel insert bonded into the carbon tubes.',
          'Epoxy tube inserts, ball joints, rod ends and welded joints for a precise, configurable yet simple design.',
          'Iterated on billet-machined components, sheet-metal structures and metal plates to cut weight and cost.'
        ],
        functionality: [
          'Preliminary carbon fiber suspension design for the car.',
          'Higher stiffness than the tubular steel arms it replaces.'
        ],
        tags: ['SolidWorks', 'FEA', 'Carbon fiber', 'DFM', 'Billet machining']
      }
    ]
  },
  {
    id: 'lab',
    eyebrow: 'UCR Dark Matter & Neutrino Lab',
    title: 'Cryogenic research hardware',
    intro: 'Mechanical engineering for an active particle-physics group at UC Riverside. Cryogenic hardware fails at the joints when everything shrinks at once, so the work is as much about fastening and tolerance as it is about the structure itself.',
    projects: [
      {
        id: 'lumirror',
        eyebrow: 'Dark Matter & Neutrino Lab',
        title: 'Lumirror sheet housing',
        short: 'May 2026 · mechanical engineer',
        meta: 'Mechanical Engineer · May 2026 — present',
        media: [
          { stage: 'cad', src: 'images/lumirror-cad.png', alt: 'CAD render of the sheet metal clamping tab with its slot and fastener holes' },
          { stage: 'prototype', src: 'images/lumirror-proto.jpg', alt: 'CNC-machined aluminum prototype tab for the lumirror housing, lying on a workbench' },
          { stage: 'prototype', print: true, src: 'images/lumirror-assembled.jpg', alt: 'The assembled aluminum prototype housing holding a sheet of Lumirror taut in the lab' }
        ],
        lead: 'The housing has to keep a 1 m × 8 m reflective plastic sheet taut and located inside a cryostat while the whole assembly contracts from room temperature down to 70 K. The aluminum prototype is assembled and holding sheet; the final build is next.',
        design: [
          'CNC aluminum for the prototype, now assembled and tested with sheet.',
          'Laser-cut 304 stainless steel planned for the final build.',
          'Sheet metal tabs and clamping sheets to grip the film without tearing it.',
          'Fastening designed around rapid cryogenic thermal contraction.'
        ],
        functionality: [
          'Tensions and houses a 1 m × 8 m sheet of Lumirror plastic.',
          'Withstands rapid thermal contraction from room temperature to 70 Kelvin.'
        ],
        tags: ['Cryogenics', 'Sheet metal', '304 stainless', 'Prototyping', 'Research']
      }
    ]
  },
  {
    id: 'ctr',
    eyebrow: 'UCR RAMS Lab · Concentric tube robotics',
    title: 'Snap-driven swimming robot',
    intro: 'The RAMS Lab is building an underwater robot whose fins swim by deliberately triggering the elastic snap of pre-curved Nitinol tubes. I joined to lead the simulation.',
    projects: [
      {
        id: 'ctr',
        eyebrow: 'UCR RAMS Lab',
        title: 'Concentric tube snap simulator',
        short: 'Sep 2026 — present · simulation lead',
        meta: 'Undergraduate Researcher, RAMS Lab · UC Riverside · Sep 2026 — present',
        link: 'https://qwertz101.github.io/turtle-robot-sim/',
        media: [
          { stage: 'analysis', video: 'video/ctr-sweep.mp4', poster: 'images/ctr-sweep-poster.jpg', alt: 'Simulation of the two-tube Nitinol fin sweeping through one full cycle of motor base twist, including the snap' },
          { stage: 'analysis', print: true, src: 'images/ctr-sim-3d.jpg', alt: 'The simulator\u2019s 3D view of a two-tube Nitinol fin mid-sweep, beside its energy landscape and equilibrium map plots' },
          { stage: 'analysis', src: 'images/ctr-optimization.jpg', alt: 'Design optimization surface of snap energy times propulsion efficiency over precurvature and overlap length, with snap-onset and fatigue boundaries' }
        ],
        lead: 'Medical concentric tube robots treat the snap of pre-curved tubes as a failure to avoid. The RAMS Lab uses it on purpose: a fin that stores torsional energy and releases it in a burst-and-coast swimming stroke. Since joining the group I have been responsible for the simulator, using it to re-evaluate whether our original fin plan was the most efficient and to explore other ways of harnessing the Nitinol snap to propel the robot.',
        design: [
          'Two-tube model built on the Gilbert\u2013Hendrick\u2013Webster elastic stability analysis: bifurcation parameter \u03bb, snap onset at \u03bb\u2080 = \u03c0\u00b2/4, energy landscape and equilibrium map.',
          'Design optimization surface of physical snap energy E_snap = \u0394E \u00b7 k_t / L_c (mJ) across precurvature and overlap length, scored by propulsion efficiency and Nitinol fatigue strain.',
          'Free, fully constrained and planar outer-tube modes to compare how the snap energy splits between bending and torsion.',
          'Photoreal three.js view with physically consistent shadows, slow-motion snap replay and a SolidWorks-style view cube.'
        ],
        functionality: [
          'Traces the fin\u2019s motion path, colour-coded build-up vs snap, and resolves a net propulsion vector shown as a compass.',
          'Snap propulsion efficiency: the share of each snap that pushes along the net propulsion direction.',
          'Every quantity carries units and its source equation; a citations page covers every paper used.',
          'Deployed on GitHub Pages so the whole group can use it from a browser.'
        ],
        tags: ['React', 'three.js', 'KaTeX', 'Elastic stability', 'Nitinol', 'Research tool']
      }
    ]
  },
  {
    id: 'first',
    eyebrow: 'FIRST Robotics · Team 6560 Charging Champions',
    title: 'Competition robot mechanisms',
    intro: 'I joined my local team in fall 2022. By actively participating in work sessions and developing my engineering I earned the CAD Lead role for the 2024 and 2025 seasons and was Team Captain in 2025. Since graduating high school I have stayed on as a Design Mentor and Project Manager for the controls team. Every mechanism below was designed, built and competed on a six-week clock.',
    projects: [
      {
        id: 'climb',
        eyebrow: 'FIRST Robotics',
        title: 'Climbing rotary mechanism',
        short: 'Feb 2025 · lifts a 150 lb robot',
        meta: 'Team Captain & CAD Lead · February 2025',
        media: [
          { stage: 'cad', src: 'images/climb-1.jpg', alt: 'CAD render of the climb mechanism with polycarbonate funnel plates and a tube-and-gusset frame' },
          { stage: 'cad', src: 'images/climb-2.jpg', alt: 'Second view of the climb mechanism showing the pivot and the sheet metal funnel' },
          { stage: 'cad', src: 'images/climb-3.jpg', alt: 'Rear view of the climb mechanism with the drive and rotating cage cradle' },
          { stage: 'field', video: 'video/climb.mp4', poster: 'images/climb-poster.jpg', alt: 'Video of the robot funnelling the steel cage and rotating it in to lift itself off the ground' }
        ],
        lead: 'The end-game climb had to catch a swinging steel cage, then rotate it into the robot hard enough to lift 150 lb off the floor — and survive being slammed into the cage at speed, match after match.',
        design: [
          'Utilized 3/8" polycarbonate for robustness.',
          'Engineered a gusset-and-tube structure for simplicity.',
          'Created an impact-resistant funnel with polycarbonate plates.',
          'Used sheet metal bending to lower assembly complexity.'
        ],
        functionality: [
          'Funnels a steel "cage" into the mechanism.',
          'Lifts the 150 lb robot by rotating the cage into the robot.'
        ],
        tags: ['Polycarbonate', 'Sheet metal', 'Rotary mechanism', 'Impact loading']
      },
      {
        id: 'offsetpivot',
        eyebrow: 'FIRST Robotics',
        title: 'Offset pivot rotary mechanism',
        short: 'Jan 2025 · turntable arm pivot',
        meta: 'Team Captain & CAD Lead · January 2025',
        media: [
          { stage: 'cad', src: 'images/offset-pivot.jpg', alt: 'CAD render of the elevator tower with the large-diameter turntable pivot and chain drive at the top' },
          { stage: 'prototype', src: 'images/offset-pivot-plate.jpg', alt: 'The machined turntable plate and arm link on a chair during assembly' },
          { stage: 'built', src: 'images/robot-2025.jpg', alt: 'The 2025 competition robot with its full-height elevator and pivoting arm' },
          { stage: 'built', src: 'images/robot-2025-shop.jpg', alt: 'The 2025 robot extended to full height in the team shop' }
        ],
        lead: 'The arm needed to pivot from the top of the elevator without its gearbox riding along for the trip. Offsetting the pivot through a large turntable and a chain run let the gearbox sit low while the arm stayed stiff.',
        design: [
          'Used #25 chain for lightweight, high-torque power transmission.',
          'Simplified the design with an inline turnbuckle chain tensioner.',
          'Increased joint stiffness with a large-diameter turntable.',
          'Used an external relative encoder to account for gearbox backlash.',
          'Lowered the gearbox to lower the mechanism centre of gravity.'
        ],
        functionality: [
          'Offsets the pivot of an "arm" mechanism.',
          'Integrates with the "elevator" mechanism.'
        ],
        tags: ['#25 chain', 'Turntable', 'Encoders', 'Power transmission']
      },
      {
        id: 'twostage',
        eyebrow: 'FIRST Robotics',
        title: '2-stage linear motion + rotational gearbox',
        short: 'Jan 2024 · wrist carriage',
        meta: 'CAD Lead · January 2024',
        media: [
          { stage: 'cad', src: 'images/two-stage-1.jpg', alt: 'CAD render of the two-stage elevator with the wrist gearbox housed in the carriage' },
          { stage: 'cad', src: 'images/two-stage-2.jpg', alt: 'Isometric view of the two-stage elevator showing the diverted belt path and bevel gearbox' },
          { stage: 'cad', src: 'images/two-stage-3.jpg', alt: 'Top-down view of the two-stage elevator carriage and motors' },
          { stage: 'built', src: 'images/two-stage-built-side.jpg', alt: 'The built two-stage elevator and wrist on the robot in the shop, side view' },
          { stage: 'built', src: 'images/two-stage-built-top.jpg', alt: 'The built two-stage elevator and rotational gearbox seen from above on the robot' }
        ],
        lead: 'Packaging is the whole problem here: the wrist gearbox lives inside the elevator carriage, the belt is diverted around it, and a constant-force spring cancels the mechanism’s own weight so the motor only moves the payload.',
        design: [
          'Used a bevel gear to optimize the gearbox packaging.',
          'Diverted the belt for packaging.',
          'Utilized a 10 lb constant-force spring to offset the mechanism weight.'
        ],
        functionality: [
          'Extends a "wrist" mechanism to score game pieces.',
          'Houses the "wrist" gearbox in the mechanism carriage.'
        ],
        tags: ['Bevel gears', 'Belt rigging', 'Constant-force spring', 'Packaging']
      },
      {
        id: 'threestage',
        eyebrow: 'FIRST Robotics',
        title: '3-stage linear motion mechanism',
        short: 'Jul 2023 · cascade elevator',
        meta: 'Design Engineer · July 2023',
        media: [
          { stage: 'cad', src: 'images/three-stage-1.jpg', alt: 'CAD render of the three-stage cascade elevator with pocketed CNC plates' },
          { stage: 'cad', src: 'images/three-stage-2.jpg', alt: 'Side view of the three-stage elevator showing the continuous belt tensioning' },
          { stage: 'built', src: 'images/three-stage-robot.jpg', alt: 'The 2023 robot with the elevator raised in the shop' },
          { stage: 'field', src: 'images/three-stage-comp.jpg', alt: 'The three-stage elevator fully extended on the robot during a competition match' }
        ],
        lead: 'The mechanism I have iterated on longest. Cascade rigging lets one motor drive three stages, and the belt tensioning was redesigned until it was continuous, easy to make and did not skip under load. Over twelve revisions across two years, the family of elevators that grew from this design reached 60 inches of travel in 0.4 seconds and a 300 lb lifting capacity.',
        design: [
          'Utilized cascade rigging to extend multiple stages with one motor.',
          'Customized the belt tensioning to be continuous and easily manufacturable.',
          'Pocketed CNC plates to meet weight limits.',
          'Iterated over 7 times to perfect the design.',
          'Later revisions added A-frames, custom gearboxes and hall-effect sensors for reliability and control.'
        ],
        functionality: [
          'Moves items double the length of the mechanism.',
          'Transports game pieces to score at a distant location.',
          'Design family rated for 60 in of travel in 0.4 s and 300 lb lifting capacity.'
        ],
        tags: ['Cascade rigging', 'Belt tensioning', 'CNC plates', 'Custom gearboxes']
      },
      {
        id: 'xytrainer',
        eyebrow: 'FIRST Robotics',
        title: '3D printer training task',
        short: 'Jun 2023 · XY linear motion R&D',
        meta: 'New member training project · June 2023',
        media: [
          { stage: 'cad', src: 'images/gantry-cad.jpg', alt: 'CAD render of the XY gantry built from 6061 aluminum tubestock with corner gussets' },
          { stage: 'built', video: 'video/gantry.mp4', poster: 'images/gantry-poster.jpg', alt: 'Video of the assembled gantry being moved by hand on the shop floor' }
        ],
        lead: 'A two-axis gantry in the style of a 3D printer, built as a training exercise that became the team’s testbed for belted linear motion.',
        design: [
          'Protected the powertrain by belting inside the tubestock.',
          'Tensioned the belt to minimize backlash.',
          'Fortified the structure with corner gussets.',
          'Used 6061 aluminum tubestock for the structure.'
        ],
        functionality: [
          'Provides research and development for future linear motion mechanisms.',
          'X and Y axis degrees of freedom.'
        ],
        tags: ['6061 aluminum', 'Belts', 'Linear motion', 'Training']
      }
    ]
  }
];

const LEADERSHIP = [
  {
    id: 'captain',
    eyebrow: 'FIRST Robotics',
    title: 'Team captain',
    short: 'May 2024 — May 2025 · 30 students',
    meta: 'Team Captain, Team 6560 · Irvine, CA · May 2024 — May 2025',
    media: [
      { src: 'images/in-action-2.jpg', alt: 'Kian prepping the robot inside the field cage before a match' },
      { src: 'images/team-photo.jpg', alt: 'Team 6560 posing with the robot after a competition' },
      { src: 'images/kian-robot.jpg', alt: 'Kian and a teammate standing beside the 2025 robot in the shop' }
    ],
    lead: 'Captaining meant owning the whole pipeline — not just the robot, but the people, money and schedule that produce one on a six-week clock.',
    design: [
      'Led a 30-student team in designing, building, wiring and coding a competition robot in two months.',
      'Managed recruitment, reimbursements, sponsorships and robot integration across subteams.',
      'Handled project management across the mechanical, electrical and software groups.'
    ],
    functionality: [
      'Competed in five yearly competitions with the resulting machine.'
    ],
    tags: ['Team leadership', 'Systems integration', 'Project management', 'Sponsorship']
  },
  {
    id: 'cadlead',
    eyebrow: 'FIRST Robotics',
    title: 'CAD lead',
    short: 'Aug 2023 — Apr 2025 · team of 6',
    meta: 'CAD Lead, Team 6560 · Irvine, CA · August 2023 — April 2025',
    media: [
      { src: 'images/kian-working.jpg', alt: 'Kian crouched over the robot chassis wiring it in the shop' }
    ],
    lead: 'This was where the team’s design practice got built: a shared library, a file system people could actually navigate, and six designers trained to the same standard.',
    design: [
      'Managed a team of 6 designing 400+ component robots with CNC, laser cutter and 3D printer in-house manufacturing and prototyping.',
      'Led R&D efforts to expand the design library and organized the team hierarchy for better productivity across skill levels.',
      'Created a Google Drive file management system and managed part procurement.'
    ],
    functionality: [
      'Trained new members to SolidWorks proficiency.',
      'Two full competition robots shipped on schedule.'
    ],
    tags: ['SolidWorks', 'CNC', 'Laser cutting', '3D printing', 'Design library']
  },
  {
    id: 'mentor',
    eyebrow: 'Mentorship',
    title: 'Design mentor & project manager',
    short: 'Jun 2025 — present · two programs',
    meta: 'Irvine High School Robotics & Charging Champions Robotics · June 2025 — present',
    media: [
      { src: 'images/in-action-1.jpg', alt: 'Kian strategizing with teammates in the pits at a competition' },
      { src: 'images/kian-robot.jpg', alt: 'Kian beside the robot in the team shop' }
    ],
    lead: 'Two strands of the same skill: getting a group of people to deliver a working physical system on a fixed date.',
    design: [
      'Provide design mentorship and CAD training for Irvine High School Robotics and Charging Champions Robotics.',
      'Project management for a controls team working in automation, vision, object detection and general robot programming.',
      'Implemented concurrent design and manufacturing, and standardized simulation-testing code.'
    ],
    functionality: [
      'As Assistant Stage Manager for University High School Technical Theatre, managed a crew of 10 through the technical set-up and planning of lighting, scenery and audio for productions (2022, 2023).'
    ],
    tags: ['Mentorship', 'Controls', 'Concurrent engineering', 'Stage management']
  }
];

const PANELS = {
  about: {
    eyebrow: 'About me',
    title: 'Six years of build seasons',
    meta: 'Southern California · BS Mechanical Engineering, UC Riverside, expected June 2029',
    media: [
      { src: 'images/wigglegram.jpg', alt: 'Kian Zarazvand leaning on a lab bench in the team shop' }
    ],
    lead: 'I’m a mechanical engineering student at the University of California, Riverside, expecting to graduate in 2029. I started in FIRST Robotics in 2022 on Team 6560 Charging Champions, ran a 30-student team as captain, and now mentor two programs while working on suspension for UCR Formula SAE and cryogenic hardware for the Dark Matter & Neutrino Lab. Most of what I know came from iterating on a part until it stopped breaking.',
    design: [
      'BS Mechanical Engineering, University of California, Riverside — 3.9 GPA, expected June 2029.',
      'Coursework: MATLAB, multivariable calculus, linear algebra, GD&T, 3D CAD design.',
      'University High School, Irvine — graduated June 2025 with a 4.15 GPA.'
    ],
    functionality: [
      'Self-described film enthusiast with a passion for early-2000s thrillers.',
      'Dancer who loves improv and freestyle street dance; indoor soccer; technical theatre.',
      'Languages: English, Farsi.'
    ],
    labels: ['Education', 'Outside the lab'],
    tags: ['Mechanical design', 'Robotics', 'English', 'Farsi']
  },
  skills: {
    eyebrow: 'Skills & tools',
    title: 'What I work in',
    meta: 'CAD · manufacturing · analysis',
    media: [
      { stage: 'cad', src: 'images/two-stage-2.jpg', alt: 'Isometric CAD render of the two-stage elevator' }
    ],
    lead: 'Most of my work starts in SolidWorks and ends on a CNC, a laser cutter or a 3D printer in the same building.',
    design: [
      'CAD and simulation: SolidWorks (design and simulation), Fusion 360 (CAD/CAM), Onshape, FEA, skeleton modeling, GD&T, Design for Manufacturability.',
      'Manufacturing: CNC machining, laser cutting, 3D printing, sheet metal, carbon fiber layup, billet machining, welded and epoxy-bonded joints.',
      'Analysis: MATLAB optimization, multivariable calculus, linear algebra, stress calculations, simulation-testing code.'
    ],
    functionality: [
      'Project management, part procurement, technical mentorship, sponsorship and budgeting.',
      'Power transmission: belts, #25 chain, gear racks, bevel gears, custom gearboxes, turntables.',
      'Sensing and control integration: hall-effect sensors, relative encoders.'
    ],
    labels: ['Core', 'Also'],
    tags: ['SolidWorks', 'Fusion 360', 'Onshape', 'MATLAB', 'GD&T']
  }
};

/* Elevator lineage: one mechanism re-optimized as requirements changed.
 * `drivers` are what each version was optimized for; they light up in the
 * comparison matrix, whose columns are TRAITS. Edit both freely.
 */
const TRAITS = ['Multi-stage', 'Lightweight', 'Compact', 'Simple', 'Heavy-duty', 'Fast'];

const ELEVATOR = {
  title: 'One mechanism, re-optimized every season',
  intro: 'I have been the team\u2019s elevator specialist since 2023. Each season the game asked for something different \u2014 more reach, less weight, tighter packaging, more load \u2014 so the same linear-motion mechanism was re-optimized around new requirements. Over 12 revisions in two years, the family reached 60 in of travel in 0.4 s and a 300 lb lifting capacity.',
  stats: [
    { figure: '12+', label: 'revisions in two years' },
    { figure: '60 in / 0.4 s', label: 'fastest travel' },
    { figure: '300 lb', label: 'heaviest lift' }
  ],
  versions: [
    {
      v: 'V0', when: 'Jun 2023', title: 'Gantry trainer', open: 'xytrainer',
      requirement: 'Learn belted linear motion before building it on a robot.',
      drivers: ['Simple'],
      changes: [
        'Belts run inside 6061 tubestock to protect the powertrain.',
        'Belt tensioned to minimize backlash; corner gussets for stiffness.',
        'Became the testbed for every elevator after it.'
      ]
    },
    {
      v: 'V1', when: 'Jul 2023', title: '3-stage cascade elevator', open: 'threestage',
      requirement: 'Score at a distant location: travel double the mechanism length.',
      drivers: ['Multi-stage', 'Heavy-duty'],
      changes: [
        'Cascade rigging drives three stages from one motor.',
        'Continuous, easily manufactured belt tensioning.',
        'Pocketed CNC plates to meet the weight limit; 7+ iterations.'
      ]
    },
    {
      v: 'V2', when: 'Jan 2024', title: '2-stage elevator + rotational gearbox', open: 'twostage',
      requirement: 'Carry a powered wrist without growing the robot.',
      drivers: ['Compact', 'Simple'],
      changes: [
        'Dropped to two stages; the wrist gearbox lives inside the carriage.',
        'Bevel gear and a diverted belt path for packaging.',
        '10 lb constant-force spring cancels the mechanism weight.'
      ]
    },
    {
      v: 'V3', when: 'Jan 2025', title: 'Elevator with offset arm pivot', open: 'offsetpivot',
      requirement: 'Hold a long pivoting arm at full height without flex.',
      drivers: ['Compact', 'Fast'],
      changes: [
        'Large-diameter turntable stiffens the arm joint.',
        '#25 chain with an inline turnbuckle tensioner.',
        'Gearbox lowered to drop the mechanism centre of gravity.'
      ]
    }
  ]
};

const TIMELINE = [
  { when: 'May 2026 — present', org: 'Dark Matter & Neutrino Lab, UC Riverside', role: 'Mechanical Engineer', open: 'lumirror' },
  { when: 'Sep 2026 — present', org: 'RAMS Lab, UC Riverside', role: 'Undergraduate Researcher, simulation', open: 'ctr' },
  { when: 'Oct 2025 — present', org: 'UCR Formula SAE', role: 'Suspension Intern → Associate Engineer', open: 'pushrod' },
  { when: 'Jun 2025 — present', org: 'FIRST Robotics', role: 'Project Manager & Design Mentor', open: 'mentor' },
  { when: 'May 2024 — May 2025', org: 'FIRST Robotics, Team 6560', role: 'Team Captain', open: 'captain' },
  { when: 'Aug 2023 — Apr 2025', org: 'FIRST Robotics, Team 6560', role: 'CAD Lead', open: 'cadlead' },
  { when: 'Jun 2023 — Sep 2025', org: 'FIRST Robotics, Team 6560', role: 'Design Engineer, elevator mechanisms', open: 'threestage' },
  { when: '2022 & 2023', org: 'University High School Technical Theatre', role: 'Assistant Stage Manager', open: 'mentor' }
];


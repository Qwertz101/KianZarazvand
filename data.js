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
    eyebrow: 'UCR Formula SAE · Highlander Racing',
    title: 'Formula SAE suspension',
    intro: 'I joined Highlander Racing, UC Riverside\u2019s Formula SAE team, on the suspension sub-team. My intern intro project was a full carbon fiber suspension concept with billet steel parts \u2014 ambitious, but unvalidated. As an associate engineer I now design the carbon fiber pushrods: bonded carbon parts, sized, documented and tested properly, as the first real step toward a full carbon suspension.',
    projects: [
      {
        id: 'pushrod',
        eyebrow: 'UCR Formula SAE · Highlander Racing',
        title: 'Carbon fiber pushrods',
        short: 'May 2026 — present · associate engineer',
        meta: 'Associate Engineer, Suspension · Highlander Racing FSAE · May 2026 — present · critical design review, pre-build',
        media: [
          { stage: 'analysis', print: true, src: 'images/pushrod-shear-profile.png', alt: 'Shear along the bond divided by average shear for three insert-to-tube stiffness ratios: the stress peaks at both ends and nearly vanishes in the middle' },
          { stage: 'analysis', src: 'images/pushrod-critical-length.png', alt: 'Failure load against bond length per end for front and rear pushrods, flattening past the critical length of about 27.5 mm' },
          { stage: 'analysis', src: 'images/pushrod-stiffness-ratio.png', alt: 'Peak over average shear against insert-to-tube stiffness ratio, with the front and rear designs marked near psi 0.55' },
          { stage: 'analysis', src: 'images/pushrod-flange-share.png', alt: 'Adhesive shear along the front bond with no flange load, 20 percent and 50 percent flange share' },
          { stage: 'analysis', src: 'images/pushrod-fea-5050.jpg', alt: 'FEA stress plot of the front flanged insert with load split 50 percent flange and 50 percent shear' },
          { stage: 'analysis', src: 'images/pushrod-fea-8020.jpg', alt: 'FEA stress plot of the front flanged insert with load split 80 percent shear and 20 percent flange' },
          { stage: 'analysis', src: 'images/pushrod-mass-savings.png', alt: 'Bar chart of pushrod mass, 4130 steel against carbon, front and rear' },
          { stage: 'cad', print: true, src: 'images/pushrod-front-on-car.jpg', alt: 'CAD of the carbon fiber front pushrod on the car' },
          { stage: 'cad', src: 'images/pushrod-front-in-chassis.jpg', alt: 'CAD of the front pushrod in the chassis, with the rest of the car shown ghosted' },
          { stage: 'cad', src: 'images/pushrod-front-rod-end.jpg', alt: 'CAD close-up of the front pushrod with a flanged aluminum insert, jam nut and rod end' },
          { stage: 'cad', src: 'images/pushrod-front-section.jpg', alt: 'Section view of the front pushrod showing the bonded insert and rod end inside the carbon tube' },
          { stage: 'cad', src: 'images/pushrod-rear-subassembly.jpg', alt: 'CAD of the rear suspension sub-assembly with the carbon fiber pushrod' },
          { stage: 'cad', src: 'images/pushrod-rear-assembly.jpg', alt: 'CAD of the full rear pushrod with a rod end at each end' },
          { stage: 'cad', src: 'images/pushrod-rear-closeup.jpg', alt: 'CAD close-up of the rear pushrod end, insert flange, jam nut and rod end' },
          { stage: 'cad', src: 'images/pushrod-rear-section.jpg', alt: 'Section view of the rear pushrod showing the bonded insert and rod end' }
        ],
        lead: 'Pushrods only carry axial load, which makes them the right first parts to move from steel to bonded carbon tube, and the testbed for the bonding process the team needs before a full carbon suspension. I researched the bonded-joint theory, worked out the Volkersen shear-stress distribution and the critical bondline length, then sized the front and rear tubes and their flanged 7075 inserts, ran the hand calculations and FEA, and presented the design at critical design review.',
        design: [
          'Front: 0.625 × 0.750 in DragonPlate roll-wrapped twill tube at 4005 N peak load. Rear: 0.500 × 0.625 in at 5387 N. Both have a 1/16 in wall, with 7075-T6 inserts (503 MPa yield) and Loctite EA E-120HP epoxy.',
          'Roll-wrapped over pultruded: the 0/90 woven layers resist impact, splitting and torsion while the 0° unidirectional plies carry the axial load. Conservative laminate modulus of 11 msi from a rule-of-mixtures hand calculation.',
          'Researched adhesive-bond theory and worked through the modified Volkersen shear-lag solution for tubular lap joints (Jaeger & Wartzack, 2022): shear peaks at both bond ends at 3.2–3.3× the average, and an equal-stiffness (ψ = 1) insert and tube would equalize those peaks.',
          'Calculated the critical bondline length l_crit = 5·√(E₁A₁t / ((1+ψ)G·w)): 27.6 mm front, 27.4 mm rear. Past it the middle of the bond carries almost no load, so extra length only adds mass.',
          'Moved the threads out of the bond zone so the insert keeps its full 1/16 in wall there (ψ = 0.56 front, 0.53 rear), and bounded the flange’s share of the load at 20–50% with FEA.',
          'Buckling by hand: Euler on the front (14.5 kN critical load, FOS 3.6) and Johnson on the rear (25.9 kN, FOS 4.8), with pin-ended rod ends.',
          'Aurora XAM-4 / XAB-4 rod ends on 5/16-24 threads, left- and right-hand, make each pushrod a length-adjustable turnbuckle locked with jam nuts. Helicoils make worn threads replaceable.'
        ],
        functionality: [
          'Four pushrods save 314 g per car against 4130 steel: front 70.5 g (−99 g, 59% lighter), rear 34.4 g (−58 g, 63% lighter), lowering unsprung mass.',
          'Bond FOS 4.8 front and 2.8 rear, assuming the flange carries no load; a 20–50% flange share would raise the rear to 4.0–5.3. Required FOS: 3 on peak bond shear, 2 on buckling.',
          'FEA on the front insert stays under 67 MPa at a 50/50 flange/shear split (FOS above 7.5 against yield) and near 50 MPa peak at 80/20.',
          'No carbon touches aluminum: an epoxy film on every interface, with glass beads holding the bondline, also takes up the 7075 versus carbon thermal expansion mismatch.',
          'Tubes and carbon tooling cost about $472 for the full set, with the tooling reused across seasons.',
          'Open items called out in the review: laminate modulus and strength are working assumptions until coupons are tested, and the thermal mismatch at the 65 °C post-cure is not yet analyzed.',
          'Assembly and validation procedure written alongside: surface prep, helicoils before bonding, dial-indicator alignment, then Instron compression and bond coupons.'
        ],
        labels: ['Design & analysis', 'Build, validation & results'],
        tags: ['SolidWorks', 'FEA', 'Bonded joints', 'Volkersen shear lag', 'Critical bond length', 'CFRP', '7075-T6', 'Loctite EA E-120HP', 'Hand calculations', 'Design review']
      },
      {
        id: 'controlarm',
        eyebrow: 'UCR Formula SAE · Intro project',
        title: 'Full carbon suspension concept',
        short: 'Jan 2026 · intern intro project · concept',
        meta: 'Suspension Intern · January 2026 · concept study, not validated or built',
        media: [
          { stage: 'cad', src: 'images/control-arm.jpg', alt: 'Concept CAD of a carbon fiber A-arm mounted to the tubular chassis with a billet upright bracket' },
          { stage: 'cad', src: 'images/control-arm-closeup.jpg', alt: 'Concept close-up of a billet steel insert joining two carbon fiber tubes with a rod end' }
        ],
        lead: 'My intern intro project: a first pass at a full carbon fiber suspension, with carbon tube arms joined by billet steel inserts and tabs. It was a CAD and hand-calculation concept \u2014 ambitious, but never validated or built. The current pushrod project is the realistic step toward it: prove bonded carbon parts properly first.',
        design: [
          'Skeleton modeling, FEA and stress calculations with Design for Manufacturability in mind.',
          'Billet steel inserts bonded into carbon tubes, with steel tabs to the chassis.',
          'Ball joints, rod ends and welded joints for a configurable, adjustable layout.'
        ],
        functionality: [
          'Concept only: not validated, tested or built.',
          'Showed that the bonded carbon-to-metal joint is the thing to prove first, which is what the pushrod project does.'
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
  { when: 'Oct 2025 — present', org: 'UCR Formula SAE · Highlander Racing', role: 'Suspension Intern → Associate Engineer', open: 'pushrod' },
  { when: 'Jun 2025 — present', org: 'FIRST Robotics', role: 'Project Manager & Design Mentor', open: 'mentor' },
  { when: 'May 2024 — May 2025', org: 'FIRST Robotics, Team 6560', role: 'Team Captain', open: 'captain' },
  { when: 'Aug 2023 — Apr 2025', org: 'FIRST Robotics, Team 6560', role: 'CAD Lead', open: 'cadlead' },
  { when: 'Jun 2023 — Sep 2025', org: 'FIRST Robotics, Team 6560', role: 'Design Engineer, elevator mechanisms', open: 'threestage' },
  { when: '2022 & 2023', org: 'University High School Technical Theatre', role: 'Assistant Stage Manager', open: 'mentor' }
];


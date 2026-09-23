/* Kian Zarazvand — portfolio content
 * All copy lives in this file: SECTIONS (project groups), LEADERSHIP, PANELS
 * and TIMELINE. Shared by the site (script.js) and the PDF (print.js).
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
          { src: 'images/pushrod-optimizer.png', alt: 'MATLAB contour plot of total assembly mass against tube outer diameter and wall thickness, with buckling, insert yield and glue shear boundaries and the optimum marked at 20.65 mm diameter and 0.75 mm wall' }
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
          { src: 'images/control-arm.jpg', alt: 'CAD render of a carbon fiber A-arm mounted to the tubular chassis with a billet upright bracket' },
          { src: 'images/control-arm-closeup.jpg', alt: 'Close-up of the machined steel insert joining two carbon fiber tubes with a rod end' }
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
          { src: 'images/lumirror-proto.jpg', alt: 'CNC-machined aluminum prototype tab for the lumirror housing, lying on a workbench' },
          { src: 'images/lumirror-cad.png', alt: 'CAD render of the sheet metal clamping tab with its slot and fastener holes' }
        ],
        lead: 'The housing has to keep a 1 m × 8 m reflective plastic sheet taut and located inside a cryostat while the whole assembly contracts from room temperature down to 70 K.',
        design: [
          'CNC aluminum for the prototype.',
          'Laser-cut 304 stainless steel for the final product.',
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
    id: 'acm',
    eyebrow: 'ACM Robotics',
    title: 'Robotic arm',
    intro: 'Manipulator design with UCR’s ACM Robotics group.',
    projects: [
      {
        id: 'forearm',
        eyebrow: 'ACM Robotics',
        title: 'Robotic arm forearm assembly',
        short: 'Apr 2026 · forearm CAD',
        meta: 'ACM Robotics, UC Riverside · April 2026',
        media: [
          { src: 'images/forearm.jpg', alt: 'CAD render of the robotic arm forearm with a servo and belt drive to the wrist joint' }
        ],
        lead: 'The forearm carries the wrist actuator back toward the elbow and drives the joint through a belt, so the arm gets stiffer and more capable without adding motor mass at the tip.',
        design: [
          'Servo actuation for the wrist motion.',
          'Custom belt tensioning built into the forearm body.'
        ],
        functionality: [
          'Shifts weight closer to the proximal joint.',
          'Increased torque and joint stiffness.'
        ],
        tags: ['Servo drive', 'Belt transmission', 'Manipulators', 'CAD']
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
          { src: 'images/climb-1.jpg', alt: 'CAD render of the climb mechanism with polycarbonate funnel plates and a tube-and-gusset frame' },
          { video: 'video/climb.mp4', poster: 'images/climb-poster.jpg', alt: 'Video of the robot funnelling the steel cage and rotating it in to lift itself off the ground' },
          { src: 'images/climb-2.jpg', alt: 'Second view of the climb mechanism showing the pivot and the sheet metal funnel' },
          { src: 'images/climb-3.jpg', alt: 'Rear view of the climb mechanism with the drive and rotating cage cradle' }
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
          { src: 'images/offset-pivot.jpg', alt: 'CAD render of the elevator tower with the large-diameter turntable pivot and chain drive at the top' },
          { src: 'images/offset-pivot-plate.jpg', alt: 'The machined turntable plate and arm link on a chair during assembly' },
          { src: 'images/robot-2025.jpg', alt: 'The 2025 competition robot with its full-height elevator and pivoting arm' },
          { src: 'images/robot-2025-shop.jpg', alt: 'The 2025 robot extended to full height in the team shop' }
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
        id: 'transfer',
        eyebrow: 'FIRST Robotics',
        title: 'Transfer mechanism',
        short: 'Jul 2024 · high-speed conveyor',
        meta: 'CAD Lead · July 2024',
        media: [
          { src: 'images/transfer-1.jpg', alt: 'CAD render of the polycarbonate transfer with belted rollers' },
          { src: 'images/transfer-2.jpg', alt: 'Alternate view of the transfer mechanism showing the roller stack and belt path' },
          { src: 'images/transfer-proto.jpg', alt: 'Prototype transfer built on the drivetrain with an orange game piece resting on the rollers' }
        ],
        lead: 'A game piece has to move from the intake to the shooter in a fraction of a second without getting pinched or thrown. The transfer is a short conveyor built from polycarbonate and belted rollers.',
        design: [
          'Designed a high-speed conveyor belt.',
          'Used polycarbonate for a lightweight structure.'
        ],
        functionality: [
          'Transfers game pieces from one mechanism to another.'
        ],
        tags: ['Conveyor', 'Polycarbonate', 'Belts', 'Prototyping']
      },
      {
        id: 'launchangle',
        eyebrow: 'FIRST Robotics',
        title: 'Launch angle rotary mechanism',
        short: 'Jul 2024 · shooter pivot',
        meta: 'CAD Lead · July 2024',
        media: [
          { src: 'images/launch-angle-1.jpg', alt: 'CAD render of the shooter pivot with a curved 20DP gear rack, carbon fiber tubes and pocketed plates' },
          { src: 'images/launch-angle-2.jpg', alt: 'Second view of the launch angle mechanism showing the shooter wheels and rack drive' },
          { src: 'images/robot-2024.jpg', alt: 'The 2024 competition robot on the floor with the shooter and transfer installed' },
          { src: 'images/robot-2024-proto.jpg', alt: 'Early 2024 robot prototype in the shop' }
        ],
        lead: 'Instead of driving the shooter pivot through its own axis, a curved gear rack lets a small pinion hold the whole assembly at any angle with plenty of torque — and the rack doubles as structure.',
        design: [
          'Used a 20DP gear rack for stability and high torque.',
          'Reinforced the structure with carbon fiber tubes.',
          'Aggressive weight reduction with pocketing.',
          'Customized the power transmission for optimal integration.',
          'Precisely integrated with the surrounding subsystems.'
        ],
        functionality: [
          'Rotates the "shooter" mechanism up and down.',
          'Moves game pieces from the "transfer" to the "shooter".'
        ],
        tags: ['Gear rack', 'Carbon fiber', 'Pocketing', 'Integration']
      },
      {
        id: 'twostage',
        eyebrow: 'FIRST Robotics',
        title: '2-stage linear motion + rotational gearbox',
        short: 'Jan 2024 · wrist carriage',
        meta: 'CAD Lead · January 2024',
        media: [
          { src: 'images/two-stage-1.jpg', alt: 'CAD render of the two-stage elevator with the wrist gearbox housed in the carriage' },
          { src: 'images/two-stage-2.jpg', alt: 'Isometric view of the two-stage elevator showing the diverted belt path and bevel gearbox' },
          { src: 'images/two-stage-3.jpg', alt: 'Top-down view of the two-stage elevator carriage and motors' }
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
          { src: 'images/three-stage-1.jpg', alt: 'CAD render of the three-stage cascade elevator with pocketed CNC plates' },
          { src: 'images/three-stage-2.jpg', alt: 'Side view of the three-stage elevator showing the continuous belt tensioning' },
          { src: 'images/three-stage-comp.jpg', alt: 'The three-stage elevator fully extended on the robot during a competition match' },
          { src: 'images/three-stage-robot.jpg', alt: 'The 2023 robot with the elevator raised in the shop' }
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
          { src: 'images/xy-trainer.jpg', alt: 'CAD render of the XY gantry built from 6061 aluminum tubestock with corner gussets' },
          { video: 'video/xy-trainer.mp4', poster: 'images/xy-trainer-poster.jpg', alt: 'Video of the assembled XY gantry being moved by hand on the shop floor' }
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
  },
  {
    id: 'personal',
    eyebrow: 'Personal projects',
    title: 'Off the clock',
    intro: 'Projects with no team, no deadline and no budget to speak of.',
    projects: [
      {
        id: 'glider',
        eyebrow: 'Personal project',
        title: 'Balsa glider',
        short: 'Mar 2025 · 12 ft wingspan',
        meta: 'Personal · March 2025',
        media: [],
        placeholder: 'Balsa glider',
        lead: 'A long-range delivery glider with a 12 ft wingspan, built from laser-cut balsa ribs, 3D-printed connectors and carbon fiber spars.',
        design: [
          'Simplified manufacturing by laser cutting balsa wood.',
          '3D-printed connectors for affordability and weight.',
          'Improved airframe rigidity with carbon fiber reinforcements.',
          'Etched part IDs for ease of assembly.',
          'Designed a 12 ft wingspan to generate sufficient lift.'
        ],
        functionality: [
          'Flies long ranges to deliver items.'
        ],
        tags: ['Laser cutting', '3D printing', 'Carbon fiber', 'Aero']
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
      { src: 'images/in-action-2.jpg', alt: 'Kian and teammates working on the robot inside the field cage at a competition' },
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
      { src: 'images/in-action-1.jpg', alt: 'Kian reviewing a checklist with teammates in the pits at a competition' },
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
      'BS Mechanical Engineering, University of California, Riverside — 3.83 GPA, expected June 2029.',
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
      { src: 'images/two-stage-2.jpg', alt: 'Isometric CAD render of the two-stage elevator' }
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

const TIMELINE = [
  { when: 'May 2026 — present', org: 'Dark Matter & Neutrino Lab, UC Riverside', role: 'Mechanical Engineer', open: 'lumirror' },
  { when: 'Apr 2026', org: 'ACM Robotics, UC Riverside', role: 'Robotic arm design', open: 'forearm' },
  { when: 'Oct 2025 — present', org: 'UCR Formula SAE', role: 'Suspension Intern → Associate Engineer', open: 'pushrod' },
  { when: 'Jun 2025 — present', org: 'FIRST Robotics', role: 'Project Manager & Design Mentor', open: 'mentor' },
  { when: 'May 2024 — May 2025', org: 'FIRST Robotics, Team 6560', role: 'Team Captain', open: 'captain' },
  { when: 'Aug 2023 — Apr 2025', org: 'FIRST Robotics, Team 6560', role: 'CAD Lead', open: 'cadlead' },
  { when: 'Jun 2023 — Sep 2025', org: 'FIRST Robotics, Team 6560', role: 'Design Engineer, elevator mechanisms', open: 'threestage' },
  { when: '2022 & 2023', org: 'University High School Technical Theatre', role: 'Assistant Stage Manager', open: 'mentor' }
];


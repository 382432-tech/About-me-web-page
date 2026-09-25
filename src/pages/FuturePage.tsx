import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Stethoscope, 
  HeartPulse, 
  GraduationCap, 
  Activity, 
  Microscope, 
  Brain, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Award, 
  Sparkles, 
  BookOpen, 
  Check, 
  X, 
  Eye, 
  Users, 
  ShieldCheck, 
  HelpCircle,
  Building2
} from 'lucide-react';

import doctorDeskImg from '../assets/images/doctor_stethoscope_desk_1790360436313.jpg';
import hospitalCareImg from '../assets/images/medical_hospital_care_1790360448999.jpg';
import anatomyLabImg from '../assets/images/medical_anatomy_lab_1790360460772.jpg';

interface FuturePageProps {
  onNavigate: (page: PageId) => void;
}

interface Specialty {
  id: string;
  name: string;
  badge: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  keyResponsibilities: string[];
  whyInspiresMe: string;
  typicalDay: string;
}

interface Milestone {
  id: string;
  stage: string;
  period: string;
  title: string;
  role: string;
  description: string;
  keyFocus: string[];
  skillsGained: string;
  badge: string;
  color: string;
}

export const FuturePage: React.FC<FuturePageProps> = ({ onNavigate }) => {
  // Selected medical specialty for interactive detail card
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string>('cardiology');

  // Interactive High School & Pre-Med preparation checklist
  const [checklist, setChecklist] = useState<{ id: string; label: string; stage: string; done: boolean }[]>([
    { id: 'bio', label: 'Master AP / Honors Biology & Chemistry coursework', stage: 'High School', done: true },
    { id: 'math', label: 'Complete advanced calculus & statistics for health analytics', stage: 'High School', done: true },
    { id: 'cpr', label: 'Earn American Heart Association CPR & First Aid Certification', stage: 'High School', done: true },
    { id: 'shadowing', label: 'Shadow practicing physicians in hospital & clinical settings', stage: 'High School', done: false },
    { id: 'volunteer', label: 'Log 150+ hours of community healthcare & patient support volunteering', stage: 'High School', done: false },
    { id: 'premed', label: 'Enroll in competitive Pre-Med undergraduate track (Biology / Biochemistry)', stage: 'Undergrad', done: false },
    { id: 'research', label: 'Participate in university biomedical laboratory research', stage: 'Undergrad', done: false },
    { id: 'mcat', label: 'Achieve a competitive MCAT score (515+ target)', stage: 'Undergrad', done: false },
    { id: 'medschool', label: 'Earn acceptance to accredited Medical School (M.D. / D.O.)', stage: 'Medical School', done: false },
  ]);

  // Gallery image preview modal state
  const [activePhotoModal, setActivePhotoModal] = useState<{
    src: string;
    title: string;
    subtitle: string;
    description: string;
    tag: string;
  } | null>(null);

  const toggleChecklistItem = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const completedCount = checklist.filter((item) => item.done).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  const specialties: Specialty[] = [
    {
      id: 'cardiology',
      name: 'Cardiology & Internal Medicine',
      badge: 'Heart & Circulatory System',
      icon: HeartPulse,
      tagline: 'Diagnosing cardiovascular conditions, hemodynamics, and life-saving interventions.',
      description: 'Cardiologists treat patients with diseases of the heart and blood vessels, including coronary artery disease, heart failure, arrhythmias, and hypertension. It blends emergency interventions with preventative lifestyle medicine.',
      keyResponsibilities: [
        'Interpreting ECGs, echocardiograms, and cardiac catheterization results',
        'Managing critical coronary syndromes and heart rhythm disorders',
        'Guiding patients through lifestyle modifications and cardioprotective medication regimens',
        'Collaborating with cardiothoracic surgeons for valve replacements and bypasses'
      ],
      whyInspiresMe: 'The heart is the vital rhythmic engine of human life. The ability to restore a patient from cardiac distress into full wellness is one of the most rewarding missions in clinical medicine.',
      typicalDay: 'Morning hospital rounds on cardiac telemetry ward, afternoon patient clinic consults, stress-test reviews, and emergency triage for chest pain admissions.'
    },
    {
      id: 'emergency',
      name: 'Emergency & Trauma Medicine',
      badge: 'Acute Resuscitation',
      icon: Activity,
      tagline: 'Frontline rapid diagnostics, critical resuscitation, and crisis stabilization.',
      description: 'Emergency physicians are the hospital’s frontline guardians. They diagnose and treat acute illnesses and traumatic injuries in patients of all ages, deciding rapid life-or-death treatment plans in real time.',
      keyResponsibilities: [
        'Airway management, rapid intubation, and acute resuscitation',
        'Immediate diagnostic ultrasound (POCUS) and trauma assessment',
        'Stabilizing stroke, myocardial infarction, and severe polytrauma patients',
        'Rapid triage and high-speed multidisciplinary team leadership'
      ],
      whyInspiresMe: 'I thrive under fast-paced situations where quick critical thinking, teamwork, and calm composure under pressure make an immediate difference in saving lives.',
      typicalDay: 'High-adrenaline 10-hour shift in the ER trauma bay, examining diverse cases from pediatric fevers and fractures to acute stroke alerts and cardiac arrests.'
    },
    {
      id: 'pediatrics',
      name: 'Pediatric Medicine',
      badge: 'Infants, Children & Teens',
      icon: Users,
      tagline: 'Guiding childhood development, treating juvenile illnesses, and supporting families.',
      description: 'Pediatricians focus on the physical, emotional, and social health of infants, children, and young adults. They diagnose complex developmental conditions, treat acute pediatric diseases, and counsel anxious families.',
      keyResponsibilities: [
        'Conducting developmental milestones and newborn wellness evaluations',
        'Diagnosing pediatric infections, congenital disorders, and asthma',
        'Building warm rapport with frightened children and reassuring parents',
        'Preventative immunizations and adolescent mental health guidance'
      ],
      whyInspiresMe: 'Children deserve compassionate advocates who can interpret subtle symptoms when young patients cannot express what hurts. Helping a child heal restores entire families.',
      typicalDay: 'Morning inpatient pediatric rounds, followed by outpatient clinic visits: developmental check-ups, acute asthma nebulizer treatments, and vaccine consultations.'
    },
    {
      id: 'neurology',
      name: 'Neurology & Neuroscience',
      badge: 'Brain & Nervous System',
      icon: Brain,
      tagline: 'Deciphering neural circuits, cognitive health, and neurodegenerative disorders.',
      description: 'Neurologists diagnose and manage diseases of the brain, spinal cord, nerves, and muscles. From stroke rehabilitation to epilepsy, Parkinson’s, and migraine management, it requires meticulous diagnostic deduction.',
      keyResponsibilities: [
        'Performing comprehensive cranial nerve and reflex neurological exams',
        'Interpreting brain MRI, CT scans, and EEG brainwave activity',
        'Treating neuroimmunological conditions, epilepsy, and neuropathy',
        'Implementing cutting-edge neuroprotective pharmacological therapies'
      ],
      whyInspiresMe: 'The human brain is the universe’s most intricate biological computer. Uncovering how neural circuits dictate thought, movement, and consciousness is intellectually captivating.',
      typicalDay: 'Reviewing brain imaging scans in the neuro-radiology suite, neuro-ICU patient consultations for stroke alerts, and outpatient clinics for tremor and seizure management.'
    },
    {
      id: 'surgery',
      name: 'General & Orthopedic Surgery',
      badge: 'Operative Precision',
      icon: Stethoscope,
      tagline: 'Hands-on operative healing, restoring physical mobility, and surgical repair.',
      description: 'Surgeons operate to repair injuries, treat trauma, remove diseased tissues, and reconstruct anatomical systems. It marries physical precision, three-dimensional spatial mastery, and deep anatomical knowledge.',
      keyResponsibilities: [
        'Pre-operative diagnostic planning and surgical risk assessment',
        'Executing sterile laparoscopic, robotic, or open operative procedures',
        'Leading the surgical theater team (anesthesiologist, scrub nurses, assistants)',
        'Managing post-operative wound healing and physical recovery rehabilitation'
      ],
      whyInspiresMe: 'The directness of surgery is incredible: identifying an acute physical ailment and fixing it with your hands and instruments to give a patient a fresh start.',
      typicalDay: 'Pre-op briefings at 7:00 AM, performing two scheduled laparoscopic procedures, managing post-op floor checks, and responding to on-call surgical consults.'
    },
  ];

  const currentSpecialty = specialties.find((s) => s.id === selectedSpecialtyId) || specialties[0];

  const roadmapStages: Milestone[] = [
    {
      id: 'stage1',
      stage: 'Stage 1',
      period: 'High School (Current)',
      title: 'Academic Foundations & Healthcare Shadowing',
      role: 'Student & Healthcare Volunteer',
      description: 'Building deep foundations in STEM subjects, developing rigorous study discipline, earning basic life support certifications, and volunteering in patient-facing clinical environments.',
      keyFocus: [
        'Excel in Advanced Placement / Honors Biology, Chemistry, and Physics',
        'Obtain American Heart Association CPR / BLS Certification',
        'Clinical shadowing hours with local doctors and clinic staff',
        'Community hospital volunteer work assisting patient transport and comfort'
      ],
      skillsGained: 'Scientific literacy, empathy, time management, active listening',
      badge: 'Current Phase',
      color: 'border-blue-500/40 bg-blue-500/10 text-blue-400'
    },
    {
      id: 'stage2',
      stage: 'Stage 2',
      period: 'Undergraduate (4 Years)',
      title: 'Pre-Med University Bachelor’s Degree',
      role: 'Pre-Med Scholar & Research Assistant',
      description: 'Pursuing a Bachelor of Science in Biology, Biochemistry, or Biomedical Sciences. Fulfilling all core medical school prerequisites while participating in laboratory research and clinical hours.',
      keyFocus: [
        'Core curriculum: Organic Chemistry, Biochemistry, Genetics, Anatomy & Physiology',
        'Biomedical research laboratory projects and scientific paper co-authorship',
        'Direct patient care experience (EMT, medical scribe, or hospital nurse assistant)',
        'Preparation and completion of the Medical College Admission Test (MCAT)'
      ],
      skillsGained: 'Biochemical principles, research methodologies, clinical documentation',
      badge: 'Next Milestone',
      color: 'border-teal-500/40 bg-teal-500/10 text-teal-400'
    },
    {
      id: 'stage3',
      stage: 'Stage 3',
      period: 'Medical School (4 Years)',
      title: 'M.D. / D.O. Degree Curriculum',
      role: 'Medical Student (MS1 – MS4)',
      description: 'Intense 4-year professional medical training. The first two years focus on preclinical sciences, pathology, and clinical skills; the final two years immerse students in hospital clinical clerkships.',
      keyFocus: [
        'Preclinical foundations: Gross Anatomy, Histology, Pathophysiology, Pharmacology',
        'Clinical Clerkships: Internal Medicine, Surgery, Pediatrics, OB/GYN, Psychiatry, Emergency',
        'Passing USMLE Step 1 (Licensing Exam) and USMLE Step 2 Clinical Knowledge',
        'National Residency Matching Program (The Match) application and interviews'
      ],
      skillsGained: 'Physical examination, differential diagnosis, patient communication, clinical pharmacology',
      badge: 'Medical Degree',
      color: 'border-indigo-500/40 bg-indigo-500/10 text-indigo-400'
    },
    {
      id: 'stage4',
      stage: 'Stage 4',
      period: 'Residency Training (3–7 Years)',
      title: 'Hospital Clinical Residency',
      role: 'Resident Physician (PGY-1 to PGY-N)',
      description: 'Graduate medical education inside teaching hospitals. Treating patients directly under attending physician supervision, mastering diagnostic judgment, and preparing for board certification.',
      keyFocus: [
        'Full-time hospital inpatient management, on-call shifts, and ICU rotations',
        'Progressive independence in diagnosing and performing clinical procedures',
        'Passing USMLE Step 3 exam to obtain unrestricted medical license',
        'Board Certification examination in chosen medical specialty'
      ],
      skillsGained: 'Complex decision-making under pressure, procedural expertise, medical leadership',
      badge: 'Clinical Mastery',
      color: 'border-amber-500/40 bg-amber-500/10 text-amber-400'
    },
    {
      id: 'stage5',
      stage: 'Stage 5',
      period: 'Full Career Practice (Lifelong)',
      title: 'Attending Physician & Community Leader',
      role: 'Licensed Attending Doctor / Specialist',
      description: 'Practicing independently as a fully licensed medical doctor. Leading patient care teams, conducting clinical research, mentoring upcoming medical students, and serving public health.',
      keyFocus: [
        'Independent diagnosis, treatment planning, and surgical/interventional procedures',
        'Patient advocacy and community healthcare wellness initiatives',
        'Continuous Medical Education (CME) and staying at the forefront of treatments',
        'Mentorship of medical residents and high school students aspiring to medicine'
      ],
      skillsGained: 'Senior medical leadership, comprehensive patient advocacy, clinical innovation',
      badge: 'The Ultimate Goal',
      color: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
    },
  ];

  const medicalGallery = [
    {
      id: 'desk',
      src: doctorDeskImg,
      title: 'Clinical Consultation & Diagnostics',
      subtitle: 'The Stethoscope & Patient Records',
      tag: 'Clinical Practice',
      description: 'The iconic stethoscope represents active listening and diagnostic observation. A physician listens closely to heartbeat rhythms, lung sounds, and the patient’s own words before formulating a medical care plan.'
    },
    {
      id: 'care',
      src: hospitalCareImg,
      title: 'Compassionate Patient Care & Hospital Rounds',
      subtitle: 'Dedication in the Hospital Corridors',
      tag: 'Hospital Rounds',
      description: 'Walking the hospital floors on morning rounds to review vital signs, adjust medical therapies, and deliver empathetic updates to patients and their loved ones.'
    },
    {
      id: 'lab',
      src: anatomyLabImg,
      title: 'Anatomy, Science & Medical Laboratory',
      subtitle: 'The Scientific Heart of Modern Medicine',
      tag: 'Medical Science',
      description: 'Mastery of human anatomy, cardiovascular physiology, and pharmacology is the intellectual foundation of becoming an exceptional, evidence-based physician.'
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header Section */}
      <section className="relative pt-6 sm:pt-10 pb-6 border-b border-neutral-800">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              Phase 7 Showcase
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-medium">
              <HeartPulse className="w-3.5 h-3.5 animate-pulse" />
              Career Aspiration: Medical Doctor (M.D.)
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              My Future Vision: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">Becoming a Doctor</span>
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base max-w-3xl leading-relaxed">
              Medicine is the noble intersection of scientific excellence, critical problem solving, and human compassion. My goal is to navigate the pre-medical pathway, excel in medical school, and devote my life to diagnosing illness, healing patients, and uplifting community health.
            </p>
          </div>
        </div>

        {/* Doctor Calling Quote Card */}
        <div className="mt-8 p-5 rounded-2xl bg-neutral-950/90 border border-neutral-800/90 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold italic">
                “Wherever the art of medicine is loved, there is also a love of humanity.”
              </p>
              <p className="text-neutral-400 text-xs mt-0.5 font-mono">
                — Hippocrates, Father of Modern Medicine
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              Goal: <span className="text-teal-400 font-semibold">Doctor of Medicine</span>
            </span>
            <span className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              Track: <span className="text-blue-400 font-semibold">Pre-Med Sciences</span>
            </span>
          </div>
        </div>
      </section>

      {/* Why Medicine & Core Physician Pillars */}
      <section className="space-y-6">
        <div className="border-b border-neutral-800/80 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">
              The Calling & Dedication
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Why I Want to Become a Doctor
            </h2>
          </div>
          <p className="text-xs text-neutral-400">
            Four guiding values shaping my medical aspirations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800/90 shadow-xl space-y-3 hover:border-blue-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Compassionate Empathy</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Illness leaves people vulnerable and frightened. Being a physician means offering calm reassurance, listening with patience, and providing dignity when patients need it most.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800/90 shadow-xl space-y-3 hover:border-teal-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
              <Microscope className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Diagnostic Curiosity</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Every patient presentation is a puzzle of biology, symptoms, and pathology. I love the intellectual challenge of analyzing lab data to pinpoint the root cause of an illness.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800/90 shadow-xl space-y-3 hover:border-indigo-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">High-Pressure Composure</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              In clinical settings, situations can turn critical in seconds. Doctors must maintain steady hands, clear thinking, and decisive leadership to direct emergency resuscitations.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800/90 shadow-xl space-y-3 hover:border-emerald-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Lifelong Learning</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Medicine advances continuously through biotechnology, gene therapies, and pharmaceuticals. Committing to medicine is a lifelong pledge to study, research, and adapt.
            </p>
          </div>

        </div>
      </section>

      {/* Visual Medical Photography Showcase */}
      <section className="space-y-6">
        <div className="border-b border-neutral-800/80 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              Visual Inspiration
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Glimpses into the Medical Life
            </h2>
          </div>
          <p className="text-xs text-neutral-400">
            Click any photo to view full-resolution clinical study
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {medicalGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhotoModal(item)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800/90 hover:border-blue-500/50 transition-all cursor-pointer shadow-xl flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md border border-neutral-700/80 text-[10px] font-mono text-neutral-200">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-900 flex items-center justify-between text-xs text-blue-400 font-mono">
                  <span>Explore Photo Insight</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 5-Stage Medical Roadmap (Timeline) */}
      <section className="space-y-6">
        <div className="border-b border-neutral-800/80 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">
              The Journey to M.D.
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              My 5-Stage Medical Career Roadmap
            </h2>
          </div>
          <p className="text-xs text-neutral-400">
            From High School to Board-Certified Physician
          </p>
        </div>

        <div className="space-y-4">
          {roadmapStages.map((stage, idx) => (
            <div
              key={stage.id}
              className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/90 shadow-xl space-y-4 relative overflow-hidden"
            >
              {/* Top Bar with Stage Badge & Period */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white font-mono font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      {stage.period}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {stage.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-full border text-xs font-mono font-medium ${stage.color}`}>
                    {stage.badge}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono">
                    {stage.role}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-300 leading-relaxed">
                {stage.description}
              </p>

              {/* Key Focus Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-neutral-900">
                {stage.keyFocus.map((focus, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-400">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{focus}</span>
                  </div>
                ))}
              </div>

              {/* Skills Footer */}
              <div className="pt-3 border-t border-neutral-900/60 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-neutral-400">
                <span>
                  Key Competencies: <span className="text-neutral-200">{stage.skillsGained}</span>
                </span>
                <span className="text-neutral-400">Step {idx + 1} of 5</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Medical Specialties of Interest (Interactive Explorer) */}
      <section className="space-y-6">
        <div className="border-b border-neutral-800/80 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
              Specialization Exploration
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Medical Specialties of Interest
            </h2>
          </div>
          <p className="text-xs text-neutral-400">
            Select a specialty tab below to examine clinical focus & reasons for interest
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {specialties.map((spec) => {
            const Icon = spec.icon;
            const isSelected = selectedSpecialtyId === spec.id;
            return (
              <button
                key={spec.id}
                onClick={() => setSelectedSpecialtyId(spec.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{spec.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Specialty Deep-Dive Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800/90 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                {React.createElement(currentSpecialty.icon, { className: 'w-7 h-7' })}
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-mono">
                  {currentSpecialty.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {currentSpecialty.name}
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm italic">
              “{currentSpecialty.tagline}”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left: Overview & Why It Inspires Me */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                  Clinical Overview
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {currentSpecialty.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">
                  Why This Field Inspires Me
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {currentSpecialty.whyInspiresMe}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                  A Typical Clinical Day Preview
                </span>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-mono">
                  {currentSpecialty.typicalDay}
                </p>
              </div>
            </div>

            {/* Right: Key Responsibilities */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                Key Clinical Procedures & Responsibilities
              </h4>
              <div className="space-y-2.5">
                {currentSpecialty.keyResponsibilities.map((resp, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800/70 flex items-start gap-3 text-xs text-neutral-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Preparation & Pre-Med Checklist */}
      <section className="space-y-6">
        <div className="border-b border-neutral-800/80 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Action Plan & Readiness
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Pre-Med Preparation Tracker
            </h2>
          </div>
          <p className="text-xs text-neutral-400">
            Interactive milestones from high school coursework to medical school admissions
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/90 shadow-xl space-y-6">
          {/* Progress Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800">
            <div>
              <h3 className="text-base font-bold text-white">
                Preparation Progress: {completedCount} of {checklist.length} Completed
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Click any milestone below to update checklist status interactively.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-36 bg-neutral-900 h-2.5 rounded-full overflow-hidden border border-neutral-800">
                <div
                  className="bg-gradient-to-r from-blue-500 to-teal-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-xs font-mono font-bold text-teal-400">{progressPercent}%</span>
            </div>
          </div>

          {/* Checklist Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {checklist.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleChecklistItem(item.id)}
                className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                  item.done
                    ? 'bg-teal-500/10 border-teal-500/30 text-neutral-200'
                    : 'bg-neutral-900/60 border-neutral-800/80 text-neutral-400 hover:border-neutral-700 hover:text-neutral-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors shrink-0 ${
                      item.done
                        ? 'bg-teal-500 border-teal-500 text-black'
                        : 'border-neutral-700 bg-neutral-800 text-transparent'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className={`text-xs font-medium ${item.done ? 'text-white' : 'text-neutral-300'}`}>
                    {item.label}
                  </span>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-400 shrink-0">
                  {item.stage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Return to Home / Next Navigation Footer */}
      <section className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-white text-base">Explore Other Coursework Modules</h4>
          <p className="text-xs text-neutral-400 mt-1">
            Navigate back to Phase 1 (Home), Phase 2 (Media), Phase 3 (Hobbies), or Phase 4 (Traveling).
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-medium text-xs transition-colors cursor-pointer"
          >
            <span>Back to Home</span>
          </button>
          <button
            onClick={() => onNavigate('traveling')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors cursor-pointer"
          >
            <span>Explore Traveling</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Photo Modal Lightbox */}
      {activePhotoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActivePhotoModal(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl space-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden">
              <img 
                src={activePhotoModal.src} 
                alt={activePhotoModal.title}
                className="w-full h-full object-cover object-center"
              />
              <button
                onClick={() => setActivePhotoModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-xs font-semibold text-white">
                  {activePhotoModal.tag}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-3">
              <div>
                <span className="text-xs font-mono text-neutral-400">
                  {activePhotoModal.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {activePhotoModal.title}
                </h3>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {activePhotoModal.description}
              </p>
              <div className="pt-3 border-t border-neutral-900 flex justify-end">
                <button
                  onClick={() => setActivePhotoModal(null)}
                  className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-medium text-white transition-colors cursor-pointer"
                >
                  Close Photo Insight
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
export default FuturePage;

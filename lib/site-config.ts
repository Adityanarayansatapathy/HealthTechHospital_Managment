export const siteConfig = {
  name: "HealthTech Hospital",
  tagline: "Advanced Super Specialty Hospital",
  location: "Keonjhar, Odisha",
  phone: "9559551955",
  whatsapp: "919559551955",
  email: "info@healthtechhospital.in",
  address: "NH-20, Medical Hub Road, Keonjhar, Odisha - 758001",
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Specialities", href: "/specialities" },
  { label: "Consult Our Best Doctors", href: "/doctors" },
  { label: "Patient Info", href: "/patient-info" },
  { label: "Insurance", href: "/insurance" },
  { label: "Our Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
]

// ---- Speciality categories for the home-page section ----

export interface SpecialityCard {
  slug: string
  title: string
  icon: string
  description: string
  category: "core" | "women-child" | "advanced"
}

export const specialityCategories = [
  { id: "core" as const, label: "Core Specialities" },
  { id: "women-child" as const, label: "Women & Child Care" },
  { id: "advanced" as const, label: "Advanced & Support Services" },
]

export const specialityCards: SpecialityCard[] = [
  // ── Core Specialities ───────────────────────────────────
  { slug: "cardiology", title: "Cardiology", icon: "Heart", description: "Comprehensive cardiac care including diagnostics, interventional and surgical procedures.", category: "core" },
  { slug: "neurology", title: "Neurology", icon: "Brain", description: "Expert diagnosis and treatment of disorders of the nervous system.", category: "core" },
  { slug: "neurosurgery", title: "Neurosurgery", icon: "BrainCircuit", description: "Advanced surgical procedures for conditions affecting the brain and spine.", category: "core" },
  { slug: "orthopedics", title: "Orthopedics", icon: "Bone", description: "Complete musculoskeletal care including joint replacement and sports medicine.", category: "core" },
  { slug: "general-surgery", title: "General Surgery", icon: "Stethoscope", description: "Wide range of surgical procedures including laparoscopic and minimally invasive surgeries.", category: "core" },
  { slug: "gynecology", title: "Gynecology & Obstetrics", icon: "Baby", description: "Comprehensive women's health services including maternity care and fertility treatments.", category: "core" },
  { slug: "internal-medicine", title: "Internal Medicine", icon: "ClipboardPlus", description: "Expert diagnosis and management of complex medical conditions.", category: "core" },
  { slug: "emergency-trauma", title: "Emergency & Trauma Care", icon: "Ambulance", description: "24/7 emergency and trauma services for critical conditions.", category: "core" },
  { slug: "pulmonology", title: "Pulmonology", icon: "Wind", description: "Specialized care for respiratory and lung disorders.", category: "core" },
  { slug: "nephrology", title: "Nephrology", icon: "Droplets", description: "Expert kidney care including dialysis and transplant evaluation.", category: "core" },
  { slug: "urology", title: "Urology", icon: "Droplet", description: "Diagnosis and treatment of urinary tract and male reproductive system disorders.", category: "core" },
  { slug: "oral-maxillofacial", title: "Oral & Maxillofacial Surgery", icon: "Smile", description: "Surgical treatment of diseases and defects of the mouth, jaw, and face.", category: "core" },
  { slug: "anaesthesiology", title: "Anaesthesiology", icon: "Syringe", description: "Safe anaesthesia delivery and perioperative care.", category: "core" },
  { slug: "endocrinology", title: "Endocrinology", icon: "Dna", description: "Diagnosis and treatment of hormonal and metabolic disorders.", category: "core" },
  { slug: "radiology", title: "Radiology & Imaging", icon: "ScanLine", description: "Advanced diagnostic imaging services including MRI, CT, and X-ray.", category: "core" },
  { slug: "pathology", title: "Pathology & Lab Medicine", icon: "FlaskConical", description: "Comprehensive laboratory diagnostic services.", category: "core" },
  { slug: "cardiothoracic-surgery", title: "Cardiothoracic Surgery", icon: "HeartPulse", description: "Surgical treatment of organs inside the thorax including the heart and lungs.", category: "core" },
  { slug: "infectious-diseases", title: "Infectious Diseases", icon: "Bug", description: "Diagnosis and treatment of infections caused by bacteria, viruses, and parasites.", category: "core" },
  { slug: "critical-care", title: "Critical Care Medicine", icon: "Activity", description: "Intensive care for critically ill patients requiring life support.", category: "core" },
  { slug: "spine-surgery", title: "Spine Surgery", icon: "Spline", description: "Advanced surgical treatment for spinal disorders and injuries.", category: "core" },

  // ── Women & Child Care ──────────────────────────────────
  { slug: "pediatrics", title: "Pediatrics", icon: "Baby", description: "Complete healthcare for infants, children, and adolescents.", category: "women-child" },
  { slug: "maternal-fetal", title: "Maternal & Fetal Medicine", icon: "HeartHandshake", description: "Specialized care for high-risk pregnancies and fetal conditions.", category: "women-child" },
  { slug: "infertility", title: "Infertility & Reproductive Medicine", icon: "Dna", description: "Advanced fertility treatments including IVF and assisted reproduction.", category: "women-child" },
  { slug: "high-risk-pregnancy", title: "High-Risk Pregnancy Care", icon: "ShieldAlert", description: "Expert management of complex and high-risk pregnancies.", category: "women-child" },
  { slug: "neonatology", title: "Neonatology", icon: "Baby", description: "Critical care for newborns, including premature and sick infants.", category: "women-child" },

  // ── Advanced & Support Services ─────────────────────────
  { slug: "icu-critical-care", title: "ICU & Critical Care Unit", icon: "Monitor", description: "State-of-the-art intensive care units with 24/7 monitoring.", category: "advanced" },
  { slug: "pharmacy", title: "24x7 In-House Pharmacy", icon: "Pill", description: "Round-the-clock pharmacy services with complete medication availability.", category: "advanced" },
  { slug: "diagnostics", title: "Advanced Diagnostics", icon: "ScanLine", description: "X-Ray, ECG, Ultrasound, and other advanced diagnostic modalities.", category: "advanced" },
  { slug: "laboratory", title: "Clinical Laboratory Services", icon: "FlaskConical", description: "Full-range clinical laboratory and pathology services.", category: "advanced" },
  { slug: "physiotherapy", title: "Physiotherapy & Rehabilitation", icon: "Dumbbell", description: "Physical rehabilitation and therapy for recovery and mobility.", category: "advanced" },
  { slug: "nutrition", title: "Diet & Nutrition", icon: "Apple", description: "Personalized diet plans and nutritional counseling.", category: "advanced" },
  { slug: "psychiatry", title: "Psychiatry & Mental Health", icon: "Brain", description: "Comprehensive mental health services and psychiatric care.", category: "advanced" },
  { slug: "transfusion-medicine", title: "Transfusion Medicine", icon: "Droplets", description: "Safe blood banking and transfusion services.", category: "advanced" },
  { slug: "plastic-surgery", title: "Plastic & Cosmetic Surgery", icon: "Sparkles", description: "Reconstructive and cosmetic surgical procedures.", category: "advanced" },
  { slug: "surgical-gastro", title: "Surgical Gastroenterology", icon: "Stethoscope", description: "Advanced surgical treatment for gastrointestinal disorders.", category: "advanced" },
]

// Full speciality data (used on individual speciality pages)
export const specialities = [
  {
    slug: "cardiology",
    title: "Cardiology",
    icon: "Heart",
    description:
      "Comprehensive cardiac care including diagnostics, interventional and surgical procedures for all heart conditions.",
    treatments: [
      "Coronary Angioplasty",
      "Heart Bypass Surgery (CABG)",
      "Valve Replacement",
      "Pacemaker Implantation",
      "Heart Transplant",
      "TAVI/TAVR Surgery",
      "Echocardiography",
      "Cardiac Catheterization",
    ],
    doctors: [
      {
        name: "Dr. Rajesh Kumar",
        designation: "Chief Interventional Cardiologist",
        qualification: "MBBS, MD, DM (Cardiology), FACC",
      },
      {
        name: "Dr. Priya Sharma",
        designation: "Clinical Cardiologist",
        qualification: "MBBS, PGDCC (Clinical Cardiology)",
      },
    ],
    symptoms: [
      "Chest pain, tightness, or pressure",
      "Shortness of breath at rest or during activity",
      "Pain spreading to left arm, neck, jaw, or back",
      "Sudden sweating, nausea, or dizziness",
      "Irregular, fast, or pounding heartbeat",
    ],
    faqs: [
      {
        q: "What are the early signs of a heart attack?",
        a: "Chest pain or pressure, breathlessness, sweating, nausea, dizziness, or pain radiating to the arm, neck, or jaw.",
      },
      {
        q: "Can young people have heart problems?",
        a: "Yes. Stress, smoking, diabetes, obesity, inactive lifestyle, and family history increase heart disease risk even at a young age.",
      },
      {
        q: "When should I see a cardiologist?",
        a: "If you experience chest discomfort, palpitations, shortness of breath, or have high blood pressure, diabetes, or a family history of heart disease.",
      },
    ],
  },
  {
    slug: "neurology",
    title: "Neurology",
    icon: "Brain",
    description:
      "Expert diagnosis and treatment of disorders of the nervous system including brain, spinal cord, and peripheral nerves.",
    treatments: [
      "Stroke Management",
      "Epilepsy Treatment",
      "Parkinson's Disease Management",
      "Migraine Treatment",
      "Multiple Sclerosis Treatment",
      "Neuropathy Management",
      "EEG & EMG Testing",
      "Brain Mapping",
    ],
    doctors: [
      {
        name: "Dr. Amit Patel",
        designation: "Senior Neurologist",
        qualification: "MBBS, MD, DM (Neurology)",
      },
    ],
    symptoms: [
      "Persistent headaches or migraines",
      "Numbness or tingling in limbs",
      "Muscle weakness or tremors",
      "Memory loss or confusion",
      "Seizures or convulsions",
    ],
    faqs: [
      {
        q: "When should I see a neurologist?",
        a: "If you experience chronic headaches, dizziness, numbness, weakness, or memory problems that persist.",
      },
      {
        q: "What is a stroke and how is it treated?",
        a: "A stroke occurs when blood supply to the brain is blocked. Early treatment with clot-dissolving medication or surgery can save lives.",
      },
    ],
  },
  {
    slug: "neurosurgery",
    title: "Neurosurgery",
    icon: "Brain",
    description:
      "Advanced surgical procedures for conditions affecting the brain, spine, and nervous system.",
    treatments: [
      "Brain Tumor Surgery",
      "Spinal Surgery",
      "Endoscopic Neurosurgery",
      "Deep Brain Stimulation",
      "Aneurysm Clipping",
      "Craniotomy",
    ],
    doctors: [
      {
        name: "Dr. Suresh Mohanty",
        designation: "Senior Neurosurgeon",
        qualification: "MBBS, MS, MCh (Neurosurgery)",
      },
    ],
    symptoms: [
      "Severe persistent headaches",
      "Vision changes or loss",
      "Progressive weakness in limbs",
      "Loss of balance or coordination",
      "Chronic back or neck pain",
    ],
    faqs: [
      {
        q: "When is neurosurgery needed?",
        a: "Neurosurgery may be needed for brain tumors, spinal cord compression, aneurysms, or severe nerve damage that doesn't respond to other treatments.",
      },
    ],
  },
  {
    slug: "orthopedics",
    title: "Orthopedics",
    icon: "Bone",
    description:
      "Complete musculoskeletal care including joint replacement, fracture treatment, and sports medicine.",
    treatments: [
      "Total Knee Replacement",
      "Total Hip Replacement",
      "Arthroscopy",
      "Fracture Management",
      "Spine Surgery",
      "Sports Injury Treatment",
      "Ligament Reconstruction",
      "Bone Tumor Surgery",
    ],
    doctors: [
      {
        name: "Dr. Vikram Singh",
        designation: "Senior Orthopedic Surgeon",
        qualification: "MBBS, MS (Ortho), Fellowship Joint Replacement",
      },
    ],
    symptoms: [
      "Joint pain or stiffness",
      "Back or neck pain",
      "Difficulty walking or moving",
      "Swelling in joints",
      "Bone fractures or deformities",
    ],
    faqs: [
      {
        q: "When do I need a knee replacement?",
        a: "When knee pain severely limits daily activities and doesn't respond to medication or physical therapy.",
      },
    ],
  },
  {
    slug: "general-surgery",
    title: "General Surgery",
    icon: "Stethoscope",
    description:
      "Wide range of surgical procedures including laparoscopic, minimally invasive, and emergency surgeries.",
    treatments: [
      "Laparoscopic Surgery",
      "Hernia Repair",
      "Appendectomy",
      "Gallbladder Surgery",
      "Thyroid Surgery",
      "Breast Surgery",
      "GI Surgery",
    ],
    doctors: [
      {
        name: "Dr. Anita Das",
        designation: "General & Laparoscopic Surgeon",
        qualification: "MBBS, MS (General Surgery)",
      },
    ],
    symptoms: [
      "Abdominal pain",
      "Lumps or swelling",
      "Difficulty swallowing",
      "Unexplained weight loss",
      "Persistent digestive issues",
    ],
    faqs: [
      {
        q: "What is laparoscopic surgery?",
        a: "A minimally invasive technique using small incisions, leading to faster recovery and less pain compared to open surgery.",
      },
    ],
  },
  {
    slug: "gynecology",
    title: "Gynecology & Obstetrics",
    icon: "Baby",
    description:
      "Comprehensive women's health services including maternity care, gynecological surgeries, and fertility treatments.",
    treatments: [
      "Normal & Cesarean Delivery",
      "High-Risk Pregnancy Care",
      "Hysterectomy",
      "Laparoscopic Gynecological Surgery",
      "Infertility Treatment",
      "Pap Smear & Screening",
    ],
    doctors: [
      {
        name: "Dr. Meena Nayak",
        designation: "Senior Gynecologist & Obstetrician",
        qualification: "MBBS, MS (OBG), Fellowship Reproductive Medicine",
      },
    ],
    symptoms: [
      "Irregular menstrual cycles",
      "Pelvic pain or discomfort",
      "Difficulty conceiving",
      "Pregnancy complications",
      "Abnormal vaginal discharge",
    ],
    faqs: [
      {
        q: "When should I see a gynecologist?",
        a: "Regular annual checkups are recommended. Visit sooner for irregular periods, pelvic pain, or pregnancy planning.",
      },
    ],
  },
  {
    slug: "internal-medicine",
    title: "Internal Medicine",
    icon: "Stethoscope",
    description:
      "Expert diagnosis and management of complex medical conditions affecting internal organs.",
    treatments: [
      "Diabetes Management",
      "Hypertension Treatment",
      "Infectious Disease Treatment",
      "Autoimmune Disorders",
      "Metabolic Disorders",
      "Preventive Health Checkups",
    ],
    doctors: [
      {
        name: "Dr. Sanjay Mishra",
        designation: "Senior Internal Medicine Specialist",
        qualification: "MBBS, MD (Internal Medicine)",
      },
    ],
    symptoms: [
      "Persistent fever",
      "Unexplained fatigue",
      "Weight changes",
      "Joint pain",
      "Digestive problems",
    ],
    faqs: [
      {
        q: "What does an internist treat?",
        a: "Internists diagnose and manage complex conditions like diabetes, hypertension, infections, and multi-organ diseases.",
      },
    ],
  },
  {
    slug: "emergency-trauma",
    title: "Emergency & Trauma Care",
    icon: "Ambulance",
    description:
      "24/7 emergency and trauma services with state-of-the-art facilities for critical and life-threatening conditions.",
    treatments: [
      "Trauma Surgery",
      "Emergency Resuscitation",
      "Critical Care",
      "Burn Management",
      "Poisoning Treatment",
      "Accident & Injury Care",
    ],
    doctors: [
      {
        name: "Dr. Ravi Jena",
        designation: "Emergency Medicine Specialist",
        qualification: "MBBS, MD (Emergency Medicine)",
      },
    ],
    symptoms: [
      "Severe bleeding or injury",
      "Chest pain or difficulty breathing",
      "Loss of consciousness",
      "Severe burns",
      "Suspected fractures",
    ],
    faqs: [
      {
        q: "When should I go to the emergency room?",
        a: "For life-threatening conditions like severe chest pain, difficulty breathing, major injuries, or loss of consciousness.",
      },
    ],
  },
  {
    slug: "pulmonology",
    title: "Pulmonology",
    icon: "Wind",
    description:
      "Specialized care for respiratory and lung disorders including asthma, COPD, and lung infections.",
    treatments: [
      "Asthma Management",
      "COPD Treatment",
      "Bronchoscopy",
      "Sleep Apnea Treatment",
      "Pulmonary Function Tests",
      "Tuberculosis Treatment",
    ],
    doctors: [
      {
        name: "Dr. Kiran Behera",
        designation: "Senior Pulmonologist",
        qualification: "MBBS, MD (Pulmonary Medicine)",
      },
    ],
    symptoms: [
      "Chronic cough",
      "Shortness of breath",
      "Wheezing",
      "Chest tightness",
      "Coughing up blood",
    ],
    faqs: [
      {
        q: "When should I see a pulmonologist?",
        a: "If you have persistent cough, difficulty breathing, or symptoms of asthma, COPD, or other lung conditions.",
      },
    ],
  },
  {
    slug: "nephrology",
    title: "Nephrology",
    icon: "Droplets",
    description:
      "Expert kidney care including dialysis, kidney transplant evaluation, and management of renal diseases.",
    treatments: [
      "Dialysis",
      "Kidney Transplant Evaluation",
      "Chronic Kidney Disease Management",
      "Kidney Stone Treatment",
      "Electrolyte Disorder Treatment",
    ],
    doctors: [
      {
        name: "Dr. Ashok Pradhan",
        designation: "Senior Nephrologist",
        qualification: "MBBS, MD, DM (Nephrology)",
      },
    ],
    symptoms: [
      "Swelling in legs or face",
      "Changes in urination",
      "Blood in urine",
      "Persistent fatigue",
      "High blood pressure",
    ],
    faqs: [
      {
        q: "What are signs of kidney disease?",
        a: "Swelling in legs, changes in urination, blood in urine, fatigue, and high blood pressure may indicate kidney issues.",
      },
    ],
  },
]

export const stats = [
  { label: "Surgeries", value: 15000, suffix: "+" },
  { label: "Expert Doctors", value: 120, suffix: "+" },
  { label: "Success Rate", value: 98, suffix: "%" },
  { label: "MRI Scans", value: 25000, suffix: "+" },
]

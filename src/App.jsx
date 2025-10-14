
import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Layout from '@/components/Layout';
    import Home from '@/pages/Home';
    import About from '@/pages/About';
    import Patients from '@/pages/Patients';
    import Providers from '@/pages/Providers';
    import Referrals from '@/pages/Referrals';
    import Contact from '@/pages/Contact';
    import StartNow from '@/pages/StartNow';
    import FAQs from '@/pages/FAQs';
    import Blog from '@/pages/Blog';
    import BlogPost from '@/pages/BlogPost';
    import Policies from '@/pages/Policies';
    import TermsAndConditions from '@/pages/TermsAndConditions';

    import Conditions from '@/pages/Conditions';
    import AnxietyDisorders from '@/pages/conditions/AnxietyDisorders';
    import MoodDisorders from '@/pages/conditions/MoodDisorders';
    import NeurodevelopmentalDisorders from '@/pages/conditions/NeurodevelopmentalDisorders';
    import PersonalityDisorders from '@/pages/conditions/PersonalityDisorders';
    import PsychoticDisorders from '@/pages/conditions/PsychoticDisorders';
    import OcdRelatedDisorders from '@/pages/conditions/OcdRelatedDisorders';
    import SubstanceRelatedDisorders from '@/pages/conditions/SubstanceRelatedDisorders';
    import TraumaStressDisorders from '@/pages/conditions/TraumaStressDisorders';

    import Services from '@/pages/Services';
    import ComprehensiveAssessment from '@/pages/services/ComprehensiveAssessment';
    import GeneticTesting from '@/pages/services/GeneticTesting';
    import AdhdTesting from '@/pages/services/AdhdTesting';
    import TherapyCounseling from '@/pages/services/TherapyCounseling';
    import MedicationManagement from '@/pages/services/MedicationManagement';
    import SudTreatment from '@/pages/services/SudTreatment';
    import Spravato from '@/pages/services/Spravato';
    import Rpm from '@/pages/services/Rpm';
    import AutismAssessment from '@/pages/services/AutismAssessment';
    import Telehealth from '@/pages/services/Telehealth';

    function App() {
      return (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/patients/faqs" element={<FAQs />} />
            <Route path="/providers" element={<Providers />} />
            <Route path="/providers/referrals" element={<Referrals />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/start" element={<StartNow />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            <Route path="/conditions" element={<Conditions />} />
            <Route path="/conditions/anxiety-disorders" element={<AnxietyDisorders />} />
            <Route path="/conditions/mood-disorders" element={<MoodDisorders />} />
            <Route path="/conditions/neurodevelopmental-disorders" element={<NeurodevelopmentalDisorders />} />
            <Route path="/conditions/personality-disorders" element={<PersonalityDisorders />} />
            <Route path="/conditions/psychotic-disorders" element={<PsychoticDisorders />} />
            <Route path="/conditions/ocd-related-disorders" element={<OcdRelatedDisorders />} />
            <Route path="/conditions/substance-related-disorders" element={<SubstanceRelatedDisorders />} />
            <Route path="/conditions/trauma-stress-disorders" element={<TraumaStressDisorders />} />
            
            <Route path="/services" element={<Services />} />
            <Route path="/services/comprehensive-psychiatric-assessment" element={<ComprehensiveAssessment />} />
            <Route path="/services/genetic-testing" element={<GeneticTesting />} />
            <Route path="/services/adhd-testing-and-management" element={<AdhdTesting />} />
            <Route path="/services/therapy-and-counseling" element={<TherapyCounseling />} />
            <Route path="/services/medication-management" element={<MedicationManagement />} />
            <Route path="/services/substance-use-disorder-treatment" element={<SudTreatment />} />
            <Route path="/services/spravato" element={<Spravato />} />
            <Route path="/services/remote-patient-monitoring" element={<Rpm />} />
            <Route path="/services/autism-assessment-and-management" element={<AutismAssessment />} />
            <Route path="/services/telehealth" element={<Telehealth />} />

            {/* Legacy service routes for any old links. These should be removed eventually. */}
            <Route path="/services/anxiety" element={<AnxietyDisorders />} />
            <Route path="/services/adhd" element={<NeurodevelopmentalDisorders />} />
            <Route path="/services/depression" element={<MoodDisorders />} />
            <Route path="/services/asd" element={<AutismAssessment />} />
            <Route path="/services/sud" element={<SubstanceRelatedDisorders />} />
            <Route path="/services/rpm" element={<Rpm />} />
          </Routes>
        </Layout>
      );
    }

    export default App;

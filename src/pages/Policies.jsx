import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Section = ({ title, children }) => (
    <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#2D6762] border-b-2 border-[#69A08B] pb-2 mb-6">{title}</h2>
        <div className="prose prose-lg max-w-none text-[#4A5455] space-y-4">
            {children}
        </div>
    </section>
);

const SubSection = ({ title, children }) => (
    <div className="mt-6">
        <h3 className="text-2xl font-semibold text-[#4A5455] mb-3">{title}</h3>
        {children}
    </div>
);


const Policies = () => {
  return (
    <>
      <Helmet>
        <title>Consent, Notices & Policies - Oasis Health Services</title>
        <meta name="description" content="Review our HIPAA Notice of Privacy Practices and Telehealth Informed Consent to understand how your medical information is used and your rights." />
      </Helmet>
      <div className="bg-white">
        <header className="bg-gradient-to-br from-[#1a3a37] to-[#2D6762] py-20 text-white">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 text-center"
            >
                <h1 className="text-4xl md:text-5xl font-bold">Consent, Notices & Policies</h1>
            </motion.div>
        </header>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>

                <Section title="HIPAA Notice of Privacy Practices">
                    <p>HIPAA (Health Insurance Portability and Accountability Act) of 1996 mandates data privacy and security for safeguarding patient’s medical information. Please review this notice carefully. It describes how medical information about you may be used and disclosed and how to get access to this information. The providers of this clinic keep a record of the healthcare services we provide. You may ask to see and copy that record.</p>
                    <p>Your protected health information may be used and disclosed by your provider, our office staff, and others outside of our office that is involved in your care and treatment to provide healthcare services to you, pay your healthcare bills, support the operation of the physician’s practice, and other uses required by law.</p>

                    <SubSection title="Treatment">
                        <p>We will use and disclose your protected health information to provide, coordinate, or manage your health care and any related services. This includes the coordination or management of your health care with a third party. For example, we would disclose your protected health information, as necessary, to a home health agency that provides care to you, As another example, your protected health information may be provided to a physician to whom you have been referred to ensure that the physician has the necessary information to diagnose or treat you.</p>
                    </SubSection>

                    <SubSection title="Payment">
                        <p>Your protected health information will be used, as needed, to obtain payment for your health care services. For example, obtaining approval for a hospital stay may require that your relevant protected health information be disclosed to the health plan to obtain approval for the hospital admission.</p>
                    </SubSection>

                    <SubSection title="Healthcare Operations">
                        <p>We may use or disclose, as needed, your protected health information to support the business activities of your provider’s practice. These activities include but are not limited to, quality assessment activities, employee review activities, training of medical students, licensing, and conducting or arranging for other business activities. For example, we may disclose your protected health information to medical school students who see patients at our office. We may use or disclose your protected health information, as needed, to contact you to remind you of your appointment.</p>
                    </SubSection>
                    
                    <SubSection title="Use Required by Law">
                         <p>We may use or disclose your protected health information in the following situations without your authorization. These situations include: as Required By Law, Public Health Issues as required by law, Communicable Diseases: Health Oversight; Abuse or Neglect; Food and Drug Administration requirements; Legal Proceedings; Healthcare insurance; Your other providers; Law Enforcement; Coroners; Funeral Directors; and Organ Donation; Research; Criminal Activity; Military Activity and National Security; Worker’s Compensation; Inmates. Under the law, we must make disclosures to you and when required by the Secretary of the Department of Health and Human Services.</p>
                    </SubSection>

                    <SubSection title="Your Rights">
                        <p>The following is a statement of your rights concerning your protected health information:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>You have the right to inspect and copy your protected health information: Under federal law, however, you may not inspect or copy the following records; psychotherapy notes; information compiled in reasonable anticipation of, or use in, a civil, criminal, or administrative action or proceeding, and protected health information that is subject to law that prohibits access to protected health information.</li>
                            <li>You have the right to request a restriction of your protected health information. This means you may ask us not to use or disclose any part of your protected health information for treatment, payment, or healthcare operations. You may also request that any part of your protected health information not be disclosed to family members or friends who may be involved in your care or for notification purposes as described in this Notice of Privacy Practices. Your request must state the specific restriction requested and to whom you want the restriction to apply. Your provider is not required to agree to a restriction that you may request. If the provider believes it is in your best interest to permit the use and disclosure of your protected health information, your protected health information will not be restricted. You then have the right to use another Healthcare Professional.</li>
                            <li>You have the right to request to receive confidential communications from us by alternative means or at an alternative location.</li>
                            <li>You have a right to receive an accounting of certain disclosures we have made, if any, of your protected health information. We reserve the right to change the terms of this notice and will inform you by mail of any changes. You then have the right to object or withdraw as provided in this notice.</li>
                            <li>You have the right to have your provider amend your protected health information.</li>
                            <li>You have the right to obtain a paper copy of this notice from us (charges apply), upon request, even if you have agreed to accept this notice electronically.</li>
                        </ul>
                         <p>If we deny your request for amendment, you have the right to file a statement of disagreement with us and we may prepare a rebuttal to your statement and will provide you with a copy of any such rebuttal.</p>
                         <p>You may complain to us or the Secretary of Health and Human Services if you believe your privacy rights have been violated by us. You may file a complaint with us by notifying our office of your complaint. We will not retaliate against you for filing a complaint.</p>
                         <p>We are required by law to maintain the privacy of and provide individuals with this notice of our legal duties and privacy practices concerning protected health information. If you have any objections to this form, please ask to speak without the HIPAA Compliance Officer in person or by phone at our main phone number.</p>
                    </SubSection>
                </Section>
                
                <Section title="Telehealth Informed Consent">
                    <p className="text-sm text-gray-500">Last updated: October 10, 2022</p>
                    <p>Before using our service, it’s important to make sure you understand how Oasis Behavioral Health services work, including how Telehealth Care differs from visiting a more traditional outpatient office, the risks associated with medications, and participating in the therapy. If you have any questions, please send us a message at support@oasishealthservices.com</p>
                    <p>This service is provided by Oasis Health Services, LLC. Oasis Behavioral Health Services PROVIDES BEHAVIORAL CARE THROUGHOUT VARIOUS STATES. OBHS can store a request for psychotropic medications and/or therapy services and assign your appointment request to a licensed therapist or psychiatric nurse practitioner, as applicable, in your state, as long as it is included as one of the “States Where We Operate” as defined in the Terms of Use. After you request through our website, OBHS staff will nominate one or more of our clinicians such as NP and/or therapists, as applicable, in your state to work on your request and provide care to you.</p>

                    <SubSection title="Non-Emergency Services">
                        <p>I understand that OBHS does not offer emergency or crisis visits. I understand that, in an emergency, I should dial 911 or go to the nearest emergency department.</p>
                        <p>I understand that 24-hour help is available through the Crisis Text Line at 741-741 or the Suicide Prevention Lifeline at 800-273-TALK.</p>
                    </SubSection>
                    
                    <SubSection title="Telehealth">
                        <p>I understand that OBHS offers mental health services to clients in various states. I understand that telehealth is the use of electronic information and communication technologies by a healthcare provider to deliver services to an individual when he/she is located at a different site than the provider, and hereby consent that Oasis Behavioral Health Services (OBHS) provides health care services to me via telehealth.</p>
                        <p>I understand that telehealth involves the delivery of healthcare services using electronic communications, information technology, or other means between a healthcare provider and patients who are not in the same physical location.</p>
                        <p>I understand that this means that a provider is unable to conduct certain tests or assess vital signs in person, which may in some cases prevent the provider(s) from providing a diagnosis or treatment or from identifying the need for emergency medical care or treatment for me. I understand that OBHS offers Patient Remote Monitoring Program, otherwise, you must purchase your own Blood Pressure monitor and scale.</p>
                        <p>I understand that while the use of telehealth may provide potential benefits to me, as with any healthcare service, no such benefits or specific results can be guaranteed. My condition may not be cured or improved, and in some cases, may get worse.</p>
                    </SubSection>

                    <SubSection title="Provider-Patient Relationship">
                        <ul className="list-disc pl-5 space-y-2">
                            <li>I give my informed consent to the use of telehealth by providers affiliated with OBHS.</li>
                            <li>I understand that the provider has the right to refuse to take responsibility for my care if the provider makes a professional judgment that I am not a good candidate for this service. I understand that requesting treatment (by completing the intake questionnaire, conducting a visit, and/or making payment) does not in and of itself create a duty of care or create a patient-provider relationship.</li>
                            <li>I understand that the provider will take responsibility for my care only after OBHS has received my consent and other required forms and the provider has reviewed my request for treatment, reviewed all my information, and then subsequently determined that I am a good candidate for the telehealth services.</li>
                            <li>I understand that at any time during my care, my provider may determine that telehealth services only are no longer appropriate for me, refuse to take further responsibility for my care and refer me to appropriate in-person care.</li>
                            <li>I understand that there may be a delay until the next business day (if falls on a weekend till Monday of that week), and at times longer before a provider reviews my request for treatment and any messages I send.</li>
                            <li>I understand that I need to be responsive to ongoing requests for information from me, including but not limited to the completion of ongoing assessments about my symptoms, functioning, and/or side effects during my treatment, to remain under the care of this provider. If I am not responsive to these requests for information, I understand that I cannot be considered to be under the care of such a provider.</li>
                            <li>I understand that my provider relies on the information that I provide and considers it to be accurate, true, and complete. Sometimes using telehealth means that the information transmitted to the provider may not be sufficient to allow for appropriate care or therapy decision-making by the provider. So, I need to provide sufficient information to my provider that will enhance the proper plan of care.</li>
                        </ul>
                    </SubSection>

                    <SubSection title="Adhering to the Treatment Plan">
                       <p>I understand that it’s important to follow the treatment plan specified by my provider, which may include taking medication as prescribed and/or completing therapy sessions and subsequent follow-ups.</p>
                    </SubSection>

                    <SubSection title="Understanding the Risks Associated with Your Care">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>I understand that all the information I provide when requesting a prescription for medication is important in the clinician’s determination as to whether I’m a good candidate for a particular medication, for any other service, or a referral. I agree to provide true and complete information and understand that if I provide information that isn’t true and complete, then I’ll be at greater risk of adverse events from taking any psychotropic medication.</li>
                          <li>I understand that adverse events can be caused by several things, including other health conditions I may have, allergic reactions, side effects, or interactions between antidepressant/antianxiety medication and other medications, nutritional supplements, or other medications I may be taking.</li>
                          <li>I understand that adverse events from taking antidepressant medication include but aren’t limited to increased risk of suicide, Serotonin Syndrome, gastrointestinal bleeding, mania, birth defects, angle-closure glaucoma, seizures, hyponatremia, and heart, liver, or kidney issues.</li>
                          <li>I understand that participating in therapy can involve examining and addressing strong emotions that may be upsetting for me. I understand that OBHS clinicians are here to help through your journey.</li>
                        </ul>
                    </SubSection>

                    <SubSection title="Appointment Link and Video Communication with a Provider in Real Time">
                        <ul className="list-disc pl-5 space-y-2">
                            <li>I understand that I will click on the link that is sent to my email or patient portal to join my provider for a live video consultation.</li>
                            <li>I understand that my provider or therapist will endeavor to respond to messages within 24 hours on weekdays, but that at times this may take longer.</li>
                            <li>I understand that I must check my email for messages and forms to be filled out. I understand that if I don’t check for email correspondence from OBHS regularly, then my care may be delayed.</li>
                            <li>I understand that if I have any questions relating to my care that aren’t urgent, I can message OBHS by leaving a confidential voicemail at our number at 509-381-6035 or email us at support@oasishealthservices.com. I understand that OBHS may not review my messages until the next business day or possibly later.</li>
                        </ul>
                    </SubSection>

                    <SubSection title="Importance of Reading Information OBHS Providers">
                        <ul className="list-disc pl-5 space-y-2">
                           <li>I understand that I may receive personalized content on the most appropriate treatment or therapy methods available to me for my health conditions and that I am using this information to make my own decisions about which treatment(s) or therapies I would like to pursue. I understand that it is important that I read the information sent to me by my provider for information and educational purposes about my health conditions and treatment choices.</li>
                           <li>I understand that I must read and understand all information provided about the medications prescribed to me, if applicable, I should discuss the medication with my pharmacist before I begin taking it.</li>
                        </ul>
                    </SubSection>

                    <SubSection title="Risk to Electronic Health Information">
                        <p>I understand that the electronic nature of the video means that there’s a greater risk to the privacy of my health information compared to visiting a traditional in-person office. I understand that although OBHS implements a wide range of system security safeguards to protect my health information, OBHS cannot guarantee the privacy and confidentiality of my health information.</p>
                        <p>For more details about how OBHS protects your health information, see our Privacy Policy.</p>
                    </SubSection>

                    <p>I agree and authorize my healthcare provider to share information regarding the telehealth assessment with other individuals for treatment and/or therapy, payment, and healthcare operations purposes.</p>
                    <p>I agree and authorize my healthcare provider to release information regarding the telehealth assessment to OBHS and its affiliates.</p>
                    <p>I agree to this Consent to Telehealth and acknowledge that using the OBHS site constitutes an ongoing agreement to this Consent to Telehealth.</p>
                </Section>

                <Section title="Assignment of Health Benefits">
                    <p>If you provide information about your health insurance or health plan, that will be deemed your authorization for us to submit claims for covered Mental Health Services to your health insurer or health plan. You hereby assign or otherwise authorize payment of Mental Health Service benefits to us for the mental health services provided to you. You authorize the release of any mental health or other information necessary to process any claims for the Mental Health Services provided to you. You further understand and accept your financial responsibility for any portion of the bill not covered by your health insurer or health plan. SUBMISSION OF YOUR CLAIMS TO THE PAYER DOES NOT WAIVE OUR RIGHT TO SEEK PAYMENT DIRECTLY FROM YOU.</p>
                </Section>

                <Section title="Office Policies & Financial Agreement">
                    <p>The policy of Oasis Behavioral Health Services is to collect all payments or insurance information at the time services are rendered. For your convenience, we accept Credit Cards such as VISA or Mastercard, HSA, or Debit Card. We will bill all insurance companies that we are contracted with. Self-pay and copay must be paid before each visit.</p>
                    <p>Health insurance is a contract between the patient and their insurance provider. Your policy may or may not cover claims made by this office, and some services provided by our physicians may be covered at different plan benefit levels. Claims may not be submitted with different codes if they have been denied due to lack of coverage.</p>
                    <p>It is your responsibility to verify Mental Health coverage and benefits with your insurance company before your first TeleHealth visit and to know the limits and exclusions of your insurance coverage. We submit insurance claims as a courtesy to our patients; all charges and outstanding balances are ultimately the patient’s responsibility.</p>
                    <p>Routine mental health visits are coded based on TeleHealth visits. Additional medical concerns brought up during your visit that require work-up, lab work, assessment, a treatment plan, or a new prescription will be billed as an additional office visit as required by insurance carriers.</p>
                    <p>Referral Policy: It is necessary to be seen by a provider for a mental health assessment and diagnosis before a referral can be given.</p>
                    <p>You will be charged a Missed Appointment fee based on the type of appointments scheduled that you missed or late cancellations (less than 24 hours’ notice).</p>
                    <p>Payment is due at the time of service. It is the patient’s responsibility to provide current insurance information to our office at the time of service. Co-pays, Co-insurances, and Deductibles are due at the time of service.</p>
                </Section>

                <Section title="Informed Consent & Other Requests for Oasis Health Services">
                    <p>I hereby request and consent to examination and treatment with licensed mental health professionals, who may serve as substitutes for another in cases of my primary mental health provider’s absence.</p>
                    <p>OBHS mental health providers will only prescribe medications if they believe that they are in the best interest of myself, and the patient.</p>
                </Section>

                <Section title="Therapy Consent">
                    <p>This therapy treatment consent form covers all procedures that are not of a nature to require special consent, and it provides protection for the procedures performed by the professional staff of Oasis Behavioral Health Services LLC. This form documents that the client has consented to treatment at Oasis Behavioral Health Services LLC including but not limited to, assessments, psychotherapy, and counseling. This allows the professional staff at Oasis Behavioral Health Services LLC to provide services to you.</p>
                    <p>This form provides evidence that no guarantee is made by any professional at Oasis Behavioral Services LLC concerning the outcome of treatment. There is no guarantee that treatment will be successful. This form also provides evidence that consent is given only after a full explanation has been provided by the staff at Oasis Behavioral Health Services LLC. If you have any questions concerning this or any matter, it is your responsibility to ask your therapist or assessor. By signing this form, you acknowledge that you understand your consent to treatment as explained in this form.</p>
                    <p>I do hereby voluntarily consent to an assessment, care, and/or treatment by OBHS. I am aware that the practice of medicine, psychiatry, clinical psychology, clinical social work, and other therapy by the licensed professional is not an exact science and I acknowledge that no guarantees have been made as to the result of evaluation or treatment. I am aware that I am an active participant in the assessment and counseling process and that I share responsibility for the treatment. My responsibilities in treatment include informing the therapist of any information that may be relevant to the problems or conditions being treated, assisting in setting goals for treatment, following therapeutic advice to the best of my ability, and ending treatment in a responsible way as applicable. If I am consenting to treatment for another person, I certify that I am legally responsible for that person and am entitled to consent to treatment for them. This form has been fully explained to me and I certify that I understand its contents. I also understand that it is my sole responsibility to ask any questions or obtain any clarification necessary to my understanding of this form fully.</p>
                </Section>

                <Section title="Telephone Consumer Protection Act (TCPA) Consent Form">
                    <p>Active communication with our patients is a key element in providing high-quality healthcare services. To that end, OBHS (the “Practice”) desires to communicate timely information regarding health care services and functions to you in the most effective means possible, including via automated telephone and text messaging. Federal law requires that we obtain your consent before communicating with you via these means. Please read and sign below so that we can communicate with you for these important purposes. We apologize for the formality of this consent, but it is required under law.</p>
                    <p>I authorize the use of my personal information, the name of my care provider, the time and place of my scheduled appointment(s), and other limited information, to notify me of a pending appointment, a missed appointment, an overdue wellness exam, balances due, lab results, or any other healthcare-related function. I consent to receive multiple messages per day from my healthcare provider, when necessary, and I consent to allowing messages to be left on my voice mail, answering system, or with another individual, if I am unavailable at the number provided by me.</p>
                    <p>I also authorize any of the Practice’s independent contractors agents and/or affiliates (“collectively, “Practice”) to contact me through the use of any dialing equipment an artificial voice or prerecorded voice, or other messaging systems, at any telephone number associated with my account including wireless telephone numbers, provided by me or found through skip tracing methods even if I am charged for the call, as well as through any email address or other personal contact information supplied by me. I expressly consent to receive any such automated calls. I understand that, depending on my plan, charges may apply to certain calls or text messages. I also understand that communication platforms may transmit information via insecure methods which includes a risk that the information could be viewed by an unintended third party. I understand these risks and consent to have these communications sent unsecured.</p>
                </Section>

                <Section title="Assignment of Benefits/Right to Payment Authorization, Patient Responsibility and Release of Information">
                    <p>I, the undersigned, assign to the provider/entity referenced above (“Provider”), my rights and benefits in any medical insurance plan, health benefit plan, or other source of payment for healthcare services (each a “Plan”) in connection with medical services provided by Provider, its employees and agents. I understand that this document is a direct assignment of my rights and benefits under my Plan.</p>
                    <p>I authorize my insurance company to pay the Provider directly for the professional or medical expense benefits payable to me. If my current policy prohibits direct payment to the Provider, I instruct my insurance company to make out the check to me and mail it directly to the address of the lockbox referenced above for the professional or medical expense benefits payable to me under my Plan as payment towards the total charges for the services rendered. In addition, I agree and understand that any funds I receive from my insurance company due for services rendered by Provider are owed to Provider and I agree to remit those funds directly to Provider.</p>
                    <SubSection title="Patient Responsibility">
                        <p>I acknowledge and agree that I am responsible for all charges for services provided to me which are not covered by my Plan or for which I am responsible for payment under my Plan. To the extent no coverage exists under my Plan, I acknowledge that I am responsible for all charges for services provided and agree to pay all charges not covered by my Plan.</p>
                    </SubSection>
                    <SubSection title="Release of Information">
                        <p>I authorize Provider and/or its agents to release any medical or other information about me in its possession to my Plan, the Social Security Administration, any state administrative agency, or their intermediaries or fiscal agents required or requested in connection with any claim for services rendered to me by Provider.</p>
                        <p>A photocopy of this Assignment/Authorization shall be considered as effective and valid as the original.</p>
                    </SubSection>
                </Section>

                <Section title="Standard Notice and Consent Documents Under the No Surprises Act">
                    <p>Surprise Billing Protection Form</p>
                    <p>This document describes your protections against unexpected medical bills. It also asks if you’d like to give up those protections and pay more for out-of-network care.</p>
                    <p className="font-bold">IMPORTANT: You aren’t required to sign this form and shouldn’t sign if you didn’t have a choice of health care provider before scheduling care. You can choose to get care from a provider or facility in your health plan’s network, which may cost you less.</p>
                    <p>If you’d like assistance with this document, ask your provider or a patient advocate. Take a picture and/or keep a copy of this form for your records.</p>
                    <p>You’re getting this notice because this provider or facility isn’t in your health plan’s network and is considered out-of-network. This means the provider or facility doesn’t have an agreement with your plan to provide services. Getting care from this provider or facility will likely cost you more.</p>
                    <p>If you plan covers the item or service you’re getting, federal law protects you from higher bills when:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>You’re getting emergency care from an out-of-network provider or facility, or</li>
                        <li>An out-of-network provider is treating you at an in-network hospital or ambulatory surgical center without getting your consent to receive a higher bill</li>
                    </ul>
                    <p>Ask your health care provider or patient advocate if you’re not sure if these protections apply to you.</p>
                    <p>If you sign this form, be aware that you may pay more because:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>You’re giving up your legal protections from higher bills.</li>
                        <li>You may owe the full costs billed for the items and services you get.</li>
                        <li>Your health plan might not count any of the amount you pay towards your deductible and out-of-pocket limit. Contact your health plan for more information</li>
                    </ul>
                    <p>Before deciding whether to sign this form, you can contact your health plan to find an in-network provider or facility. If there isn’t one, you can also ask your health plan if they can work out an agreement with this provider or facility (or another one) to lower your costs.</p>
                    <p>Visit Standard-Notice-and-Consent_Nonparticipating-Providers.pdf for an electronic copy of this consent form with details of estimated costs.</p>
                    <p className="font-bold">By signing, I give up my federal consumer protections and agree to pay more for out-of-network care.</p>
                    <p>With my signature, I am saying that I agree to get the items or services from:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Olajumoke Akinyele</li>
                        <li>Anne-Marie Taylor</li>
                    </ul>
                    <p>With my signature, I acknowledge that I am consenting of my own free will and am not being coerced or pressured. I also understand that:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>I’m giving up some consumer billing protections under federal law</li>
                        <li>I may get a bill for the full charges for these items and services or have to pay out-of-network cost-sharing under my health plan.</li>
                        <li>I was given written notice on (date of service) explaining that my provider or facility isn’t in my health plan’s network, the estimated cost of services, and what I may owe if I agree to be treated by this provider or facility.</li>
                        <li>I got the notice either on paper or electronically, consistent with my choice.</li>
                        <li>I fully and completely understand that some or all amounts I pay might not count toward my health plan’s deductible or out-of-pocket limit</li>
                        <li>I can end this agreement by notifying the provider or facility in writing before getting services.</li>
                    </ul>
                    <p className="font-bold">IMPORTANT: You don’t have to sign this form. But if you don’t sign, this provider or facility might not treat you. You can choose to get care from a provider or facility in your health plan’s network.</p>
                    <p>Take a picture and/or keep a copy of this form.</p>
                    <p>It contains important information about your rights and protections.</p>
                    <p>Visit Standard-Notice-and-Consent_Nonparticipating-Providers.pdf for an electronic copy of this form.</p>
                </Section>

                <Section title="Appointment Cancellation Policy">
                    <p>We understand that everyone has unplanned events that demand immediate attention and do require the cancellation of appointments. Please know that we schedule 45 minutes – 1-hour first appointment and up to 30 minutes follow-ups. When you cancel, it puts a large hole in our schedule.</p>
                    <p>I am authorizing Oasis Health Services, to charge my credit card in the event I fail to show up for a scheduled appointment or if I do not give notification of my inability to attend a scheduled appointment at least 24 business hours in advance. I am aware that weekends and holidays do not count as normal business hours (appointments on Monday must be canceled by the Friday before). I understand there will be a fee of $100.00 for each missed initial and follow-up appointment. I am aware that my insurance will not cover a missed appointment and that I am responsible for this fee. I understand and agree that my card may be charged without me being present. I will not dispute sessions that I have received or for sessions, I have canceled less than 24 business hours in advance.</p>
                    <p>If I arrive more than 15 minutes late to an appointment it will be considered a late cancellation/missed appointment.</p>
                </Section>

                <Section title="Paying Your Bill">
                    <p>Payment for all services provided is due at the time services are rendered. However, Oasis Health Services will submit a claim for you to any third party or insurance carrier with whom Oasis Health Services contracts. Although we offer a courtesy service to verify your insurance benefits, it is your responsibility to provide accurate information and also to contact your insurance plan to verify your benefits.</p>
                    <p>Your co-pay, co-insurance, and deductible (when applicable) are due and must be paid before my appointment time by cash, check, or card (credit/HSA/FSA). Invoices are sent before your appointment and you can pay by yourself from your patient portal. Statements are sent monthly. I agree that I will not dispute any charges to my credit card due to patient responsibilities, processed towards deductible or other balances.</p>
                    <p>Balances past due for 90 days will be sent to an outside collections agency.</p>
                </Section>

                <Section title="Clinical Supervision">
                    <p>We occasionally receive students in our clinical setting during their clinical rotations and voluntary services. They are with the providers for supervision during your session and we will notify you before the session starts. Please let us know if you are not comfortable with this process at any time before or during your session.</p>
                </Section>

            </motion.div>
        </main>
      </div>
    </>
  );
};

export default Policies;
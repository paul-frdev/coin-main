'use client'

import React from 'react';
import { Container } from '../ui/Container'
import { Title } from '../ui/Title'
import { Typography } from '../ui/Typography'
import { motion } from "framer-motion";

export const PrivacyClient = () => {
  return (
    <Container>
      <motion.div
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            y: 0,
            opacity: 0,
          },
          animate: {
            y: 0,
            opacity: 1,
            transition: { type: "tween", duration: 1, delay: 0.1 },
          },
        }}
        className='w-full max-w-[792px] mx-auto'
      >
        <Title className='text-[2.25rem] mb-6'>
          Privacy Policy
        </Title>
        <div className=' w-full text-left text-base font-goggleSans font-normal'>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-8'>Brytix, a product of ZIMRAN LIMITED</Typography>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-8'>
            The following Privacy Policy applies to Prosperi (hereinafter referred to as the “website”), more precisely to the consistent plan on receiving the information directed to boost the Users financial literacy (hereinafter referred to as the product).
          </Typography>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-8'>
            While using our product, our primary intent is to create an effective tool that will boost the Users financial literacy. However, we have not overlooked the issue of protecting the privacy of everyone using our website. We respect your privacy and are committed to protecting your personal data.
          </Typography>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-8'>
            This privacy policy is compliant with the provisions of the EU’s General Data Protection Regulation (GDPR) and meets safety standards applicable in the USA, while for the purposes of this policy, the term “personal data” used was taken from the provisions of the General Data Protection Regulation (GDPR).
          </Typography>
        </div>
        <Title tag='h3' className='text-[2.25rem] mb-6'>
          Personal Data Controller:
        </Title>
        <div className=' w-full text-left text-base font-goggleSans font-normal'>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-8'>
            ZIMRAN LIMITED, a legal entity incorporated under the laws of the Republic of Cyprus with registration number HE429677, having its registered office at Zimran Limited, Georgiou A, 83, Shop 17, Potamos Germasogeias, 4047, Limassol, the Republic of Cyprus, will be the controller of your personal data.
          </Typography>
        </div>
        <Title tag='h4' className='text-[2.25rem] mb-6'>
          Why we collect personal data
        </Title>
        <div className=' w-full text-left text-base font-goggleSans font-normal'>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-8'>
            Going through the onboarding process, the user provides us with his/her personal data for:
          </Typography>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-8'>
            The product only requests information/data relevant to its core functionality, and only collects and uses information/data that is required to accomplish the relevant task(s).
          </Typography>
        </div>
        <Title tag='h5' className='text-[2.25rem] mb-6'>
          What Information We Collect:
        </Title>
        <div className=' w-full text-left text-base font-goggleSans font-normal'>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-8'>
            We respect your privacy and are committed to protecting your personal data. However, we can employ or work with other individuals or companies (hereinafter referred to as the “service providers”) to perform certain functions on our behalf. These service providers are granted access to the personal data needed to perform their functions but are prohibited from using personal data for any other purposes. We provide paid products for the consistent plan of receiving the information to boost the Users financial literacy (hereinafter referred to as the Service). For this purpose, we use third-party services for payment processing (for example, payment processors). This information will be provided directly to our third-party payment processors. As a result of this processing, you will be able to make a payment for our Service, and we will be notified that the payment has been made and will provide you with our products and/or services. We will not store or collect your payment card details ourselves. We confirm that such access will be followed by the equal protection of user data as stated in this Privacy Policy.
            In the case that data is transferred to third countries outside the European Union, it will follow all necessary legal regulations, which are intended to ensure adequate protection of the user’s data, which this user can view upon request.
          </Typography>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-8'>
            The product only requests information/data relevant to its core functionality, and only collects and uses information/data that is required to accomplish the relevant task(s).
          </Typography>
        </div>
        <Title tag='h3' className='text-[2.25rem] mb-6'>
          Duration of Storage
        </Title>
        <div className=' w-full text-left text-base font-goggleSans font-normal'>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-8'>
            We retain users’ personal data for as long as it is reasonably necessary for achieving the purposes outlined in this Privacy Policy (including providing the Service to you) or until the user requests its deletion by contacting our Support Service support@prosperi.io. Deleting your account means permanently deactivating your account from any subscription the user has purchased. If the user wants us to delete personal data from our system, the user must contact our Support Service and specifically request the erasure of personal data. In some cases, we may be legally required to keep some of the data for a specific time; in such an event, we will fulfill your request after complying with our obligations.
          </Typography>
        </div>
        <Title tag='h4' className='text-[2.25rem] mb-6'>
          Duration of Storage
        </Title>
        <div className=' w-full text-left text-base font-goggleSans font-normal'>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-8'>
            We reserve the right to update and make changes to this Privacy Policy. Where we intend to process previously collected personal data for a new purpose(s), updated notice, and choice in accordance with applicable law will be provided.
          </Typography>
        </div>
        <Title tag='h5' className='text-[2.25rem] mb-6'>
          Contact Us
        </Title>
        <div className=' w-full text-left text-base font-goggleSans font-normal'>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-5'>
            ZIMRAN LIMITED
          </Typography>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-5'>
            Georgiou A, 83, Shop 17, Potamos Germasogeias
          </Typography>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-5'>
            4047, Limassol, the Republic of Cyprus
          </Typography>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-5'>
            HE429677
          </Typography>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-5'>
            e-mail: info@zimranlimited.com
          </Typography>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-5'>
            Date of Last Revision: June 29th, 2022.
          </Typography>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-5'>
            © ZIMRAN LIMITED 2022 All rights reserved.
          </Typography>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-5'>
            * “Personal data” means any information relating to an identified or identifiable natural person (‘data subject’); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person (Article 4 (1) of the GDPR).
            (See the full text of the EU’s General Data Protection Regulation (GDPR) at https://eur-lex.europa.eu/eli/reg/2016/679/oj)
          </Typography>
          <Typography className='text-left text-base w-full max-w-full text-[#101010] mb-6'>
            (See the full text of the EU’s General Data Protection Regulation (GDPR) at https://eur-lex.europa.eu/eli/reg/2016/679/oj)
          </Typography>
        </div>
      </motion.div>
    </Container>
  )
}

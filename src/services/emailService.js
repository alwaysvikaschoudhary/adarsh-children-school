import emailjs from '@emailjs/browser';

// EmailJS Configuration
// IMPORTANT: Replace these with your actual EmailJS credentials
// Get them from: https://www.emailjs.com/
const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  ADMISSION_TEMPLATE_ID: 'YOUR_ADMISSION_TEMPLATE_ID', // Template for admission enquiries
  CONTACT_TEMPLATE_ID: 'YOUR_CONTACT_TEMPLATE_ID', // Template for contact messages
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
};

// Initialize EmailJS (call this once in your app)
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

/**
 * Send admission enquiry email
 * @param {Object} formData - Form data from admission form
 * @returns {Promise} EmailJS send promise
 */
export const sendAdmissionEnquiry = async (formData) => {
  try {
    // Template parameters that will be available in your email template
    const templateParams = {
      to_email: 'adarshchildrenschool@gmail.com', // School email
      parent_name: formData.parentName,
      child_name: formData.childName,
      child_age: formData.childAge,
      campus: formData.campus === 'acs' ? "Adarsh Children's Senior Secondary School" : "Adarsh Children's Early Years",
      phone: formData.phone,
      email: formData.email,
      message: formData.message || 'No additional message',
      enquiry_type: 'Admission Enquiry',
      date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.ADMISSION_TEMPLATE_ID,
      templateParams
    );

    console.log('Admission email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Failed to send admission email:', error);
    throw error;
  }
};

/**
 * Send contact form email
 * @param {Object} formData - Form data from contact form
 * @returns {Promise} EmailJS send promise
 */
export const sendContactMessage = async (formData) => {
  try {
    const templateParams = {
      to_email: 'adarshchildrenschool@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      enquiry_type: 'General Contact',
      date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
      templateParams
    );

    console.log('Contact email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Failed to send contact email:', error);
    throw error;
  }
};

/**
 * Send WhatsApp notification (alternative method)
 * This creates a WhatsApp message with form details
 */
export const sendWhatsAppNotification = (formData, type = 'admission') => {
  const phone = '918947097731'; // School WhatsApp number
  
  let message = '';
  
  if (type === 'admission') {
    message = `🎓 *New Admission Enquiry*\n\n` +
              `👤 Parent: ${formData.parentName}\n` +
              `👶 Child: ${formData.childName}\n` +
              `📅 Age: ${formData.childAge}\n` +
              `🏫 Campus: ${formData.campus === 'acs' ? "Adarsh Children's Senior Secondary School" : ""}\n` +
              `📞 Phone: ${formData.phone}\n` +
              `📧 Email: ${formData.email}\n` +
              `💬 Message: ${formData.message || 'N/A'}`;
  } else {
    message = `📬 *New Contact Message*\n\n` +
              `👤 Name: ${formData.name}\n` +
              `📧 Email: ${formData.email}\n` +
              `📞 Phone: ${formData.phone}\n` +
              `📝 Subject: ${formData.subject}\n` +
              `💬 Message: ${formData.message}`;
  }
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  
  // Open WhatsApp in new tab
  window.open(whatsappUrl, '_blank');
};

export default {
  initEmailJS,
  sendAdmissionEnquiry,
  sendContactMessage,
  sendWhatsAppNotification,
};

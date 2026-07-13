// ============================================================
// Email Service using Web3Forms (FREE, no account needed)
// ============================================================
// SETUP (1 minute):
//
// 1. Go to https://web3forms.com/
// 2. Enter your email: 23365@iiitu.ac.in
// 3. Click "Create Access Key"
// 4. Check your email inbox for the access key
// 5. Replace 'YOUR_ACCESS_KEY' below with the key from your email
// ============================================================

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

/**
 * Send admission enquiry email via Web3Forms
 * Emails will be delivered to 23365@iiitu.ac.in
 * @param {Object} formData - Form data from admission form
 * @returns {Promise} Response from Web3Forms
 */
export const sendAdmissionEnquiry = async (formData) => {
  try {
    const campusName = formData.campus === 'acs'
      ? "Adarsh Children's Senior Secondary School"
      : "Adarsh Children's Early Years";

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `🎓 New Admission Enquiry from ${formData.parentName}`,
        from_name: 'Adarsh School Website',
        // Form fields
        'Parent/Guardian Name': formData.parentName,
        "Child's Name": formData.childName,
        "Child's Age": formData.childAge,
        'Preferred Campus': campusName,
        'Phone Number': formData.phone,
        'Email': formData.email,
        'Message': formData.message || 'No additional message',
        'Enquiry Type': 'Admission Enquiry',
        'Submitted On': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.log('Admission email sent successfully:', result);
      return result;
    } else {
      throw new Error(result.message || 'Failed to send email');
    }
  } catch (error) {
    console.error('Failed to send admission email:', error);
    throw error;
  }
};

/**
 * Send contact form email via Web3Forms
 * @param {Object} formData - Form data from contact form
 * @returns {Promise} Response from Web3Forms
 */
export const sendContactMessage = async (formData) => {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `📬 New Contact Message: ${formData.subject}`,
        from_name: 'Adarsh School Website',
        // Form fields
        'Name': formData.name,
        'Email': formData.email,
        'Phone': formData.phone,
        'Subject': formData.subject,
        'Message': formData.message,
        'Enquiry Type': 'General Contact',
        'Submitted On': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.log('Contact email sent successfully:', result);
      return result;
    } else {
      throw new Error(result.message || 'Failed to send email');
    }
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
  const phone = '919928283094'; // School WhatsApp number
  
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

// No initialization needed for Web3Forms
export const initEmailJS = () => {};

export default {
  initEmailJS,
  sendAdmissionEnquiry,
  sendContactMessage,
  sendWhatsAppNotification,
};

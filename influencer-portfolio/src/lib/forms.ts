// Form validation and submission utilities

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget?: string;
  timeline?: string;
  platform?: string;
}

export interface WorkWithMeFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  platform: string;
}

// Form validation
export const validateContactForm = (
  data: ContactFormData
): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.subject.trim()) {
    errors.subject = "Subject is required";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.length < 10) {
    errors.message = "Message must be at least 10 characters long";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateWorkWithMeForm = (
  data: WorkWithMeFormData
): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.projectType.trim()) {
    errors.projectType = "Project type is required";
  }

  if (!data.budget.trim()) {
    errors.budget = "Budget range is required";
  }

  if (!data.timeline.trim()) {
    errors.timeline = "Timeline is required";
  }

  if (!data.description.trim()) {
    errors.description = "Project description is required";
  } else if (data.description.length < 20) {
    errors.description = "Description must be at least 20 characters long";
  }

  if (!data.platform.trim()) {
    errors.platform = "Platform is required";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Form submission handler
export const submitContactForm = async (
  data: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real application, this would send to your backend or email service
    // For now, we'll simulate a successful submission
    console.log("Contact form submission:", data);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message:
        "Thank you for your message! I'll get back to you within 24 hours.",
    };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again or email me directly.",
    };
  }
};

export const submitWorkWithMeForm = async (
  data: WorkWithMeFormData
): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real application, this would send to your backend or email service
    // For now, we'll simulate a successful submission
    console.log("Work with me form submission:", data);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message:
        "Thank you for your collaboration inquiry! I'll review your project details and get back to you within 48 hours.",
    };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      message:
        "Sorry, there was an error sending your inquiry. Please try again or email me directly.",
    };
  }
};

// Form field options
export const budgetOptions = [
  "Under $1,000",
  "$1,000 - $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
];

export const timelineOptions = [
  "ASAP",
  "1-2 weeks",
  "1 month",
  "2-3 months",
  "3+ months",
];

export const projectTypeOptions = [
  "Brand Partnership",
  "Sponsored Content",
  "Product Collaboration",
  "Event Appearance",
  "Consultation",
  "Other",
];

export const platformOptions = [
  "Instagram",
  "TikTok",
  "YouTube",
  "Blog",
  "Multiple Platforms",
  "Other",
];

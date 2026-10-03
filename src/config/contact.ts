/**
 * The contact form: copy, visibility switch and backend settings.
 */
export const contact = {
  // Copy ------------------------------------------------------------------
  // The field placeholders, the button label and the wait/success/error
  // messages live in the /contact/ page itself, next to the markup they
  // render.
  heading: "Contact",
  intro:
    "Have a recipe question, a request for something new, or an idea for a collaboration? Drop me a line — I read every message.",
  responseTime: "Replies usually go out within two business days.",

  // Visibility ------------------------------------------------------------
  /** Master switch for the contact form and its nav links. */
  enabled: true,

  // Provider --------------------------------------------------------------
  /**
   * Where the form posts. Leave this EMPTY for demo mode: the form then
   * validates locally and shows the inline success message, and no
   * submissions are collected anywhere. Set it to your form backend's
   * endpoint (e.g. Formspree, Basin, Web3Forms) to go live.
   */
  action: "",
  method: "post" as const,
  /**
   * How a live submit behaves. Only read when `action` is set.
   *
   * - "native": the browser posts and the backend shows its own
   *   confirmation page. Works with every provider.
   * - "ajax": fetch the endpoint and show the inline success panel, so the
   *   visitor stays on the page. Needs a backend that sends CORS headers
   *   and accepts cross-origin form posts (Formspree, Basin and Web3Forms
   *   do; see CUSTOMIZATION.md).
   */
  submitMode: "ajax" as "native" | "ajax",
  /** After a successful "ajax" submit, send the visitor here. Empty = stay. */
  successUrl: "",
  /** The name input's name attribute, which must match the provider. */
  nameFieldName: "name",
  /** The email input's name attribute, which must match the provider. */
  emailFieldName: "email",
  /** The message textarea's name attribute, which must match the provider. */
  messageFieldName: "message",
  /**
   * Hidden fields some backends require. Formspree, for example, honours
   * `_subject` as the notification email subject:
   *   extraFields: { _subject: "New message from Veggify" }
   */
  extraFields: {} as Record<string, string>,
};

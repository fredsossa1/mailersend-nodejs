import Attachment from "./Attachment";
import Recipient from "./Recipient";

export = EmailParams;
declare class EmailParams {
  constructor(config?: {});
  from: string;
  fromName: string;
  recipients: Recipient[];
  cc?: Recipient[];
  bcc?: Recipient[];
  attachments?: Attachment[];
  subject: string;
  html: string;
  text: string;
  templateId?: string;
  variables?: any;
  personalization?: any;
  tags?: string[];
  setFrom(from: string): EmailParams;
  setFromName(fromName: string): EmailParams;
  setRecipients(recipients: Recipient[]): EmailParams;
  setAttachments(attachments: Attachment[]): EmailParams;
  setCc(cc: string): EmailParams;
  setBcc(bcc: string): EmailParams;
  setSubject(subject: string): EmailParams;
  setHtml(html: string): EmailParams;
  setText(text: string): EmailParams;
  setTemplateId(templateId: string): EmailParams;
  setVariables(variables: any): EmailParams;
  setPersonalization(personalization: any): EmailParams;
  setTags(tags: string[]): EmailParams;
}

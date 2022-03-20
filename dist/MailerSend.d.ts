export = MailerSend;
declare class MailerSend {
  constructor(config: any);
  api_key: string;
  basePath: string;
  request(endpoint?: string, options?: {}): any;
}

import ISendMailDTO from '../dtos/ISendMailDTO';
import IMailProvider from '../models/IMailProvider';

interface IMessage {
  to: string;
  body: string;
}

export default class FakeEmailProvider implements IMailProvider {
  private messages: ISendMailDTO[] = [];

  public async sendEmail(message: ISendMailDTO): Promise<void> {
    this.messages.push(message);
  }
}

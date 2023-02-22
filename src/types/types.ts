export interface IIconOrios extends React.SVGProps<SVGSVGElement> {
  isActive: boolean;
}

export interface IMessage {
  id: string;
  text: string;
  senderId: string;
  receiverId: string;
}

export interface IDialog {
  id: string;
  senderAvatar: string;
  senderName: string;
  lastMessage: string;
  messageSent: string;
}

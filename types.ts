

export interface Membership {
  id: string;
  name: string;
  price: number;
  description: string;
  isGift: boolean;
  type?: 'membership' | 'merch' | 'donation';
}

export interface CartItem extends Membership {
  quantity: number;
}

export interface UserInfo {
  email: string;
  firstName: string;
  lastName: string;
  ageGroup: string;
}

export enum AgeGroup {
  GROUP_1 = "49-56",
  GROUP_2 = "57-64",
  GROUP_3 = "65-72",
  GROUP_4 = "73-79",
  GROUP_5 = "80+"
}


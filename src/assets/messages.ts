export interface Chat {
  id: number;
  receiver: Receiver;
  messages: Message[];
}

export interface Receiver {
  avatar: string;
  firstName: string;
  lastName: string;
}

export interface Message {
  id: number;
  text: string;
  datetime: string;
}

/**
 * Generates a random first name.
 */
export const getRandomFirstName = (): string => {
  const names: string[] = [
    'Ahmet',
    'Mehmet',
    'Ayşe',
    'Fatma',
    'Selin',
    'Veli',
    'Tarık',
    'Özge',
    'Emine',
    'Eren',
  ];
  const lastName = names[Math.floor(Math.random() * names.length)];
  return lastName;
};
/**
 * Generates a random last name.
 */
export const getRandomLastName = (): string => {
  const lastNames: string[] = [
    'Yılmaz',
    'Öztürk',
    'Özcan',
    'Özdemir',
    'Özkal',
    'Özkurt',
    'Deniz',
    'Kara',
    'Kılıç',
  ];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return lastName;
};

/**
 * Generates a random user.
 *
 */
export const getRandomUser = (): Receiver => {
  const firstName = getRandomFirstName();
  const lastName = getRandomLastName();
  const avatar = 'https://picsum.photos/30';
  return {
    firstName,
    lastName,
    avatar,
  };
};

/**
 * Generates a random message.
 * @param receiver The receiver of the message.
 * @param text The text of the message.
 * @param datetime The datetime of the message.
 * @returns The generated message.
 * @example
 */
export const getRandomMessage = (): Message => {
  const id = Date.now() + Math.floor(Math.random() * 1000);
  const text = 'Lorem ipsum dolor sit amet';
  // generate a random date between 1 and 30 days ago
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 30));
  const datetime = date.toISOString();

  return {
    id,
    text,
    datetime,
  };
};

export const chatList: Chat[] = Array.from({length: 35}, (v, k) => k).map(
  id => ({
    id,
    receiver: getRandomUser(),
    messages: Array.from({length: Math.random() * 100 + 1}, (v, k) => k).map(
      () => getRandomMessage(),
    ),
  }),
);

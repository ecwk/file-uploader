import { faker } from '@faker-js/faker';

import { IFile } from 'modules/files';
import { generateUser } from 'modules/users';

type Props = Partial<IFile>;

export const generateFile = (props?: Props): IFile => ({
  id: props?.id || String(faker.helpers.unique(faker.datatype.number)),
  name: props?.name || faker.system.fileName(),
  path: props?.path || faker.image.imageUrl(),
  size: props?.size || faker.datatype.number(),
  type: props?.type || faker.system.mimeType(),
  visibility:
    props?.visibility || faker.helpers.arrayElement(['public', 'private']),
  extension: props?.extension || faker.helpers.arrayElement(EXTENSIONS),
  createdOn: props?.createdOn || faker.date.past(1).toISOString(),
  updatedOn: props?.updatedOn || faker.date.past(0).toISOString(),
  createdBy: props?.createdBy || generateUser()
});

const EXTENSIONS = [
  'zip',
  'rar',
  '7z',
  'gz',
  'tar',
  'z',
  'z7',
  'z8',
  'z9',
  'mp3',
  'wav',
  'wma',
  'aac',
  'aif',
  'flac',
  'm4a',
  'ogg',
  'wma',
  'mp4',
  'avi',
  'flv',
  'mov',
  'wmv',
  '3gp',
  'mkv',
  'webm',
  'html',
  'css',
  'js',
  'jsx',
  'ts',
  'tsx',
  'php',
  'py',
  'java',
  'c',
  'cpp',
  'cs',
  'go',
  'rb',
  'swift',
  'json',
  'xml',
  'jpg',
  'jpeg',
  'png',
  'gif',
  'bmp',
  'svg',
  'psd',
  'raw',
  'webp'
];

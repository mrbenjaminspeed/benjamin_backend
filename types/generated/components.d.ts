import type { Schema, Struct } from '@strapi/strapi';

export interface SocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_links';
  info: {
    displayName: 'links';
    icon: 'link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface WorkSoundtrack extends Struct.ComponentSchema {
  collectionName: 'components_work_soundtracks';
  info: {
    description: '';
    displayName: 'soundtrack';
    icon: 'volumeUp';
  };
  attributes: {
    tracks: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface WorkWorkDetail extends Struct.ComponentSchema {
  collectionName: 'components_work_work_details';
  info: {
    description: '';
    displayName: 'work-detail';
    icon: 'stack';
  };
  attributes: {
    album_cover: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    directors: Schema.Attribute.String;
    releaseDate: Schema.Attribute.String;
    soundtrack: Schema.Attribute.Component<'work.soundtrack', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'social.links': SocialLinks;
      'work.soundtrack': WorkSoundtrack;
      'work.work-detail': WorkWorkDetail;
    }
  }
}

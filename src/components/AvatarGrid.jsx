import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { avatars } from '../data/avatars';
import styles from '../styles/AvatarGrid.module.css';

export const AvatarGrid = ({ search }) => {
  const filteredAvatars = avatars.filter(avatar =>
    avatar.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAvatarClick = (twitterUrl) => {
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.grid}>
      {filteredAvatars.length > 0 ? (
        filteredAvatars.map(avatar => (
          <div 
            key={avatar.id} 
            className={styles.avatarItem}
            onClick={() => handleAvatarClick(avatar.twitterUrl)}
            title={`View ${avatar.name}'s Twitter`}
          >
            <LazyLoadImage
              src={avatar.img}
              alt={avatar.name}
              className={styles.avatarImage}
              effect="blur"
            />
            <span className={styles.avatarName}>{avatar.name}</span>
          </div>
        ))
      ) : (
        <p>No avatars found</p>
      )}
    </div>
  );
};
import Tags from './tags';
import './card.css';
import { UserInfo } from '@/data/card/type';

interface CardProps {
  item: UserInfo;
}

function Card({ item }: CardProps) {
  return (
    <div className="card">
      <img src={item.image} alt="user-name" className="user-img" />
      <div className="user-info">
        <span className="user-name">{item.name}</span>
        <div className="tags">
          {item.tags.map((tags, index) => (
            <Tags item={tags} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;

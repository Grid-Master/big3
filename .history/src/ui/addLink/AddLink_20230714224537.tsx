import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IAddLink {
  path: string;
}

const AddLink: FC<IAddLink> = ({ path }) => {
  return <Link to={path}>Add +</Link>;
};

export default AddLink;

import { User } from '../types/types';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import "tailwindcss";

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export const UserCard = ({ user, onEdit, onDelete }: UserCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">
            {user.first_name} {user.last_name}
          </h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => onEdit(user)}
          className="p-2 text-blue-500 hover:text-blue-700"
          aria-label="Edit"
        >
          <PencilIcon className="h-5 w-5" />
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="p-2 text-red-500 hover:text-red-700"
          aria-label="Delete"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
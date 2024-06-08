import { useState, useEffect } from "react";
import Select, { components, OptionProps } from "react-select";
import { useGetUsersQuery } from "../../state/redux/slices/usersApiSlice";

interface User {
  id: number;
  name: string;
  email: string;
  photo: string;
}

interface Props {
  members: User[];
  onChange: (selectedOptions: User[] | null) => void;
}

const PeoplePicker = ({ members, onChange }: Props) => {
  const [selectedPeople, setSelectedPeople] = useState<User[]>([]);
  const [options, setOptions] = useState<User[]>([]);

  const { data: users, isLoading } = useGetUsersQuery("");

  useEffect(() => {
    // Map user data to the format expected by react-select
    if (users) {
      const options = users.map((user: User) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        photo: user.photo,
      }));
      setOptions(options);

      // Initialize selectedPeople with existing values
      if (members && Array.isArray(members)) {
        setSelectedPeople(members);
      }
    }
  }, [users, members]);

  const handleSelectChange = (selectedOptions: User[] | null) => {
    setSelectedPeople(selectedOptions || []);
    onChange(selectedOptions || []);
  };

  if (isLoading) {
    return <p>Loading users...</p>;
  }

  const Option = (props: OptionProps<User, true>) => {
    return (
      <components.Option {...props}>
        <div className="flex items-center">
          <img
            src={props.data.photo}
            alt="User"
            style={{
              marginRight: "8px",
              borderRadius: "50%",
              height: "24px",
            }}
          />
          {props.data.name}
        </div>
      </components.Option>
    );
  };

  return (
    <div className="relative z-50">
      <Select
        isMulti
        value={selectedPeople}
        onChange={handleSelectChange}
        options={options}
        isSearchable={true}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => String(option.id)}
        components={{ Option }}
      />
    </div>
  );
};

export default PeoplePicker;

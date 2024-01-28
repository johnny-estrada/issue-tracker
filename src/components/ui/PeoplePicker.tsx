import { useState, useEffect } from "react";
import Select from "react-select";
import { useGetUsersQuery } from "../../services/state/redux/slices/usersApiSlice";

const PeoplePicker = ({ members, onChange }) => {
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [options, setOptions] = useState([]);

  const { data: users, isLoading, refetch, error } = useGetUsersQuery();

  useEffect(() => {
    // Map user data to the format expected by react-select
    if (users) {
      const options = users.map((user) => ({
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

  const handleSelectChange = (selectedOptions) => {
    setSelectedPeople(selectedOptions);
    onChange(selectedOptions);
  };

  if (isLoading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error loading users: {error.message}</p>;
  }

  return (
    <div>
      <Select
        isMulti
        value={selectedPeople?.map((option) => ({
          id: option.id,
          name: option.name,
          email: option.email,
          photo: option.photo,
        }))}
        onChange={handleSelectChange}
        options={options}
        isSearchable={true}
        filterOption={({ name, data }, inputValue) => {
          const labelString = String(name);
          return (
            labelString.toLowerCase().includes(inputValue.toLowerCase()) ||
            data.email.toLowerCase().includes(inputValue.toLowerCase())
          );
        }}
        getOptionLabel={(option) => (
          <div className="flex">
            <img
              src={option.photo}
              alt="User"
              style={{
                marginRight: "8px",
                borderRadius: "50%",
                height: "24px",
              }}
            />
            <span>{option.name}</span>
          </div>
        )}
        getOptionValue={(option) => String(option.id)}
      />
    </div>
  );
};

export default PeoplePicker;

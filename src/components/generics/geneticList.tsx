import React from "react";

type genericsType<T> = {
  tasks: T[];
};
const GenericsList = <T extends {}>({ tasks }: genericsType<T>) => {
  const onClickHandler = (e: React.MouseEvent) => {};
  return (
    <>
      {tasks.map(() => (
        <div onClick={onClickHandler}>generics is here </div>
      ))}
    </>
  );
};
export default GenericsList;

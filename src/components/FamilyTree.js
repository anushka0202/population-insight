import React from "react";

const FamilyTree = ({ selectedPerson, data }) => {
  console.log("selected:", selectedPerson);

  // Function to find the root of the family tree for a selected person
  const findRootPerson = (person) => {
    //if the person does not have "Father's ID" property, it returns the person.
    if (!person["Father's ID"]) {
      return person;
    }

    //else, it finds the father of the person and recursively calls itself with the father as an argument until it reaches the root person.
    const fatherID = person["Father's ID"];
    const father = data.find((p) => p.ID === fatherID);
    return findRootPerson(father);
  };

  // Recursively build the family tree starting from the root person
  const buildFamilyTree = (person) => {
    const children = data.filter((p) => p["Father's ID"] === person.ID);

    //If there are no children, it returns a list item with the person's name.
    if (children.length === 0) {
      return (
        <li
          style={person.ID === selectedPerson.ID ? { fontWeight: "bold" } : {}}
          key={person.ID}
        >
          {person.Name}
        </li>
      );
    }

    //If there are children, it returns a list item with the person's name and a nested unordered list, where each child is rendered by calling the buildFamilyTree function recursively.
    return (
      <li className="child" key={person.ID}>
        <p
          style={person.ID === selectedPerson.ID ? { fontWeight: "bold" } : {}}
        >
          {person.Name}
        </p>
        <ul>{children.map((child) => buildFamilyTree(child))}</ul>
      </li>
    );
  };

  // Render the family tree
  return (
    <div className="family-tree-container">
      <div className="tree">
        <h1>Family Tree</h1>
        {selectedPerson && (
          <ul>{buildFamilyTree(findRootPerson(selectedPerson))}</ul>
        )}
      </div>
    </div>
  );
};

export default FamilyTree;

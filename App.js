
import React, { useState } from 'react';
import { Button, View, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements'
// import FontAwesome, {
//   SolidIcons,
//   RegularIcons,
//   BrandIcons,
//   parseIconFromClassName,
// } from 'react-native-fontawesome';

const App = () => {
  
  
  const employeeList = [{id: "1", name: "Snehankur"},
          {id: "2", name: "Kedar"},
          {id: "3", name: "Swapnil"}
         ];
  const [employee, setEmployee] = useState('');
  const [searchResult, setSearchResult] = useState();
  const [found, setFound] = useState(false);
  employesSearch = employeeList;
  
  clear =()=>{
    setFound(false);
  }

  findName =()=>{
          employesSearch = employeeList;
          let found = false;
          employeeList.map((item)=>{
             
              if(item.name==employee)
              {
                employesSearch = [];
                employesSearch.push(item);
                setSearchResult(employesSearch);
                found=true;
                setFound(found);
              } 
          });

          if(!found)
          {
            setSearchResult([{id: "1", name: employee+" Not found"}]);
            setFound(true);
          }      
      }

  return (
    <View style={{padding: 10}}>
    <TextInput
       style={{height: 40}}
       placeholder="Search Employee"
       onChangeText={employee => setEmployee(employee)}
       defaultValue={employee}
     /> 
     <Button onPress={findName} title="Search" />
     <Button onPress={clear} title="Clear" />
    
     { found &&
    searchResult.map((l, i) => (
      <ListItem key={i} >
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ))
  }

{ !found &&
    employeeList.map((l, i) => (
      <ListItem key={i} >
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ))
  }
    
    
   
    </View>
  );
};

export default App;
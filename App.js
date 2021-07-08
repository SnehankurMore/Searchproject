
import React, { useState } from 'react';
import { Button, View, Text, TextInput } from 'react-native';

const App = () => {
  const [searchReuslt, setSearchReuslt] = useState('');
  const [employee, setEmployee] = useState('');
  const employeeList = [{id: "1", name: "Snehankur"},
          {id: "2", name: "Kedar"},
          {id: "3", name: "Swapnil"}
         ];

  findName =()=>{
          let found = false;

          employeeList.map((item)=>{
              if(item.name==employee)
              {
                found=true;
                setSearchReuslt("found name: "+item.name);
              }
          });
          if(!found){
            setSearchReuslt(employee+" Not Found");
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

    <Text style="top:100px;"> Search Result: {searchReuslt}</Text>
    </View>
  );
};

export default App;
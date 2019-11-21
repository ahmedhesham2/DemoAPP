import React  from 'react';
import appStyles from "../../styles/appStyles"
import tableStyles from "../../styles/tableStyles"
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Dimensions } from 'react-native';


class TableComponent extends React.Component{

	render(){
      if(this.props.data){ 
  			  return (<Table  style={{backgroundColor: "white",  width: (Dimensions.get("window").width) -20  }} borderStyle={{borderWidth: 0.5, borderColor: '#e6e9ed'}}>
            			<Row  data={this.props.header} style={tableStyles.head} textStyle={tableStyles.text}/>
                  {
                      this.props.data.map((rowData,index) => (  

                      <TableWrapper key={index} style={tableStyles.row}>
                        {
                          rowData['data'].slice(0, 4).map((cellData, cellIndex) => (
                            <Cell key={cellIndex} data={cellIndex === 3 ? this.props.onEdit(rowData['id']) : cellData} textStyle={tableStyles.text}/>
                          ))
                        }
                      </TableWrapper>
                      ))
            		  }
          	</Table>)
        }
        else{
          return(<Table style={{backgroundColor: "white" }} borderStyle={{borderWidth: 1,  borderColor: 'rgb(42,55,68)'}}>
                <Row data={this.props.header} style={tableStyles.head} textStyle={tableStyles.text}/>
          </Table>)
        }
		
	}

}

export {TableComponent}
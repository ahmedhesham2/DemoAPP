import React  , { PureComponent } from 'react';
import { Form, FormItem, Input } from '../common'
import { Text, TextInput,View,TouchableOpacity,Button } from 'react-native'
import appStyles from "../../styles/appStyles"
import { TableComponent } from '../common'
import { Icon } from "react-native-elements";
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import { Formik } from "formik";
import { connect } from "react-redux";

const tableHead = ['Date', 'Comment', 'Added By', 'Edit']

class Comments extends PureComponent{
  
constructor() {
    super();
    this.state = {
      modal: false,
      id: '',
      comment:'',
    };
} 

editIcon = (index) => {
     return( <TouchableOpacity onPress={() => this.editValues(index)}>
        <Icon name="edit" size={25} color="#AA0000" />
      </TouchableOpacity>
      );
}

editValues = (key) =>{
  this.props.tableData.map((rowData,index) => {
        if(key == rowData['id'])
         this.setState({ comment: rowData['data'][1], id:key, modal:true }) 
  });
}

componentWillReceiveProps(nextProps) {
  if(nextProps.save)
    this.setState({ comment: '' });
}

_handleSubmit =  (values, actions) => {
	 this.props.value["comment"] = values["comment"]  	
   this.props.onChange(this.props.name, this.props.value);
   actions.resetForm({ comment: '' });      
   this.props.addComment(values)

	         
}; 

saveRow = (values) =>{
     this.props.tableData.map((rowData,index) => {
          if(parseInt(this.state.id) == rowData['id']){
            rowData['data'][1] = values["comment"]
            this.setState({modal: false})    
          }
    });
    this.props.updateTableData(this.props.tableData)
}

render(){
	return(
	    <View>
        <Dialog visible={this.state.modal}>
            <DialogContent style={appStyles.popupStyle}>
              < Formik initialValues = {{"comment": this.state.comment  }}  onSubmit={this.saveRow} >
                { ({ handleChange , handleSubmit , errors , values , setFieldValue , touched }) => (
                  <>
                   <Text>{'\n'}</Text>
                    <Text>Comment :  </Text>
                    <TextInput multiline={true} numberOfLines={10} name="comment" value = {values.comment} style={{backgroundColor: 'white',width:200}} onChangeText={ text => setFieldValue("comment", text)}/>

                    <Button title = "Save" onPress={handleSubmit} />
                      <Text>{'\n'}</Text>
                    <Button title = "Cancel" onPress={() => {this.setState({modal: false })}} />
                 </>
                )}
                </Formik>
            </DialogContent>
          </Dialog>
        <Formik
          initialValues={{ comment: '' }}
          onSubmit={this._handleSubmit}
          render={({
            values,
            handleSubmit,
            setFieldValue,
            errors,
            touched,
            setFieldTouched,
            isValid,
            isSubmitting,
          }) => (
            <React.Fragment>

            <Text>Comment :  </Text>
			      <TextInput multiline={true} numberOfLines={10} name="comment" style={{backgroundColor: 'white',width:200}} onChangeText={ text => setFieldValue("comment", text)}/>
            <Button
                title="Post Comment"
                onPress={handleSubmit}
                loading={false}
              />
            <Text>{'\n'}</Text>
      		<TableComponent header = {tableHead} data = {this.props.tableData} onEdit= {this.editIcon.bind(this)} />            
            </React.Fragment>
          )}
        />
     </View>	
	   );
	}
}

function mapStateToProps(state) {
    return {
        tableData: state.Comments.tableData,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateTableData: (Data) => dispatch({
        type: 'updateCommentsTableData',
        data: Data,
      }),
      addComment: (Data) => dispatch({
        type: 'addComment',
        data: Data,
      })
   };
};

export default connect(mapStateToProps, mapDispatchToProps) (Comments); 

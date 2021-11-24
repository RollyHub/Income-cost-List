

var x=0,k=0,m=0, y=0, sumIncome=0, sumCost=0, i=0, j=0;
var income_array=[];
var cost_array= [];
var indescription_array=[];
var costdescription_array=[];
var sel_option = document.getElementById('select').value

document.getElementById("input_1").required = true;
function addFuncton(){
    var text = document.getElementById('input_1').value
    var in_value= document.getElementById('input_2').value
    var sel_option = document.getElementById('select').value
    document.getElementById('incomeListTable').innerHTML="";
    document.getElementById('costListTable').innerHTML="";
    if(text=="" || in_value==""){
      if(text=="" &&  in_value==""){
        document.getElementById('des_required').innerHTML="**This field is requred";
        document.getElementById('val_required').innerHTML="**This field is requred";
      }
      else if(text==""){
        document.getElementById('des_required').innerHTML="**This field is requred";
        document.getElementById('val_required').innerHTML="";
      }
      else if(in_value==""){
        document.getElementById('des_required').innerHTML="";
        document.getElementById('val_required').innerHTML="**This field is requred";
      }
    }
    else{
      document.getElementById('des_required').innerHTML="";
      document.getElementById('val_required').innerHTML="";
      if(sel_option=="+"){
          x= document.getElementById('input_2').value
          var in_text= document.getElementById('input_1').value
          indescription_array.push(in_text)
          a=parseInt(x);
          income_array.push(a);
          for(i;i<income_array.length;i++){
            sumIncome= sumIncome+ income_array[i];
          }
          document.getElementById('income').innerHTML= "+"+sumIncome;
        }
        else if (sel_option=="-"){
          y= document.getElementById('input_2').value
          var co_text= document.getElementById('input_1').value
          costdescription_array.push(co_text)
          b=parseInt(y);
          cost_array.push(b);
          for(j;j<cost_array.length;j++){
            sumCost= sumCost+ cost_array[j];
          }
          document.getElementById('cost').innerHTML= "-"+sumCost;
        }
        document.getElementById('pro-value').innerHTML= sumIncome-sumCost;

      }

    }
    var tableData="";
    function incomeList(){
      for( k; k<income_array.length;k++){
        tableData= tableData+"<tr>"+"<td>"+ indescription_array[k] +"</td>"+"<td>"+ income_array[k] +"</td>"+ "</tr>";
      }
      document.getElementById('incomeListTable').innerHTML= "<table>"+"<caption>InkomstLista</caption>"+"<tr>"+"<th> Description </th>"+"<th> Inkomst </th>"+"</tr>"+tableData+"</table>";
    }
    var tableData_2="";
    function costList(){
      for( m; m<cost_array.length;m++){
        tableData_2= tableData_2+"<tr>"+"<td>"+ costdescription_array[m] +"</td>"+"<td>"+ cost_array[m] +"</td>"+ "</tr>";
      }
      document.getElementById('costListTable').innerHTML= "<table>"+"<caption>KostnaderLista</caption>"+"<tr>"+"<th> Description </th>"+"<th> Kostnader </th>"+"</tr>"+tableData_2+"</table>";
    }

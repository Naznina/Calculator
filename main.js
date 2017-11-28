if( !$('#' + id ).val() ){
		$("label[for='" + id + "']").addClass("error");
		$("#"+id).addClass("form-error-field");
		isValid = false;
	}
    
    function addErrorMessage(id,errorMessage){
	$("#"+id).addClass("form-error-field");
	if($("#"+id+"ErrorMessageDiv").length==0){
		$("#"+id).after("<div class='errorDivMsg' id='"+id+"ErrorMessageDiv'><i>"+errorMessage+"</i></div>");
	}
}

function removeErrorMessage(id){
	$("#"+id).removeClass('form-error-field');
	$("#"+id+"ErrorMessageDiv").remove();
}

.form-error-field{
	border:1px solid #a0b8d1;
	background-color:#FFFF00;
}

.errorDivMsg {
	color:#CC0000;
	font-style: italic;
/* 	font-weight:bold; */
}

function alphaNumericDollarHyphen(){
	if( $(this).prop('type') === 'textarea'){
		 var cols = $(this).attr('cols');
		  if (cols != null && $(this).val().length > cols) {
		        $(this).val($(this).val().substring(0, cols));
		    }
		}
	  var c = this.selectionStart,
	    r = /[^a-z0-9 $-]/gi,
	    v = $(this).val();
	if(r.test(v)) {
	  $(this).val(v.replace(r, ''));
	  c--;
	}
	this.setSelectionRange(c, c);
}

function isMinLengthOfTextFieldSpecified(id,minLen)
{
	var isValid = true;
	var errorMessage = "Length must be minimum "+minLen+" characters";
	
	if( !$('#' + id ).val() || $('#' + id ).val().length < minLen){
		isValid = false;
		addErrorMessage(id,errorMessage);
	} else {
		removeErrorMessage(id);
	}
	
	return isValid;
}

function formSubmit(action, url) {
    if(validateFields(action) == false) return;

    //set Tab Name
    if(action == "PULL"){
        $('#hiddenTabName').val("readTab");
    } else{
        $('#hiddenTabName').val("writeTab")
    }

    $('#formPullMsg').attr('action', url);
    $("#formPullMsg").submit();
}

function resetFieldErrors(){
    removeErrorMessage('dropDownTopicName');
}

function validateFields(action) {
    resetFieldErrors();

    var isValid = true;

    if(action == 'PULL'){
        isValid = isFieldSpecified('dropDownTopicName','','Topic name is null/empty');
    } else if(action == 'SEND'){
        isValid = isFieldSpecified('dropDownTopicName','','Topic name is null/empty');
        isValid = isFieldSpecified('textAreaMessage','','Message is null/empty');
    }

    return isValid;
}

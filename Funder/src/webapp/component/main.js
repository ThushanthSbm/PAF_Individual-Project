$(document).ready(function()
{
	 $("#alertSuccess").hide();
	 $("#alertError").hide();
}); 


$(function (){
	var $apps = $('#apps');
	var $funderName = $('#FunderName');
	var $funderMail = $('#FunderMail');
	var $phoneNo = $('#PhoneNo');
	var $address = $('#Address');
	var $amount = $('#Amount');
	

	$.ajax({
		type: 'GET',
		url: 'http://localhost:8080/Funder/webapi/Funder/funder',
		success: function(apps){
			//console.log('success',data);
			$.each(apps, function(i, app){
				$apps.append('<li><div class="card shadow-lg p-3 mb-5 bg-white rounded bg-light m-2\" style=\"width: 12rem;float: left;">'
							+'Funder name:<span class="noedit funderName">' + app.funderName +'</span><input class="edit funderName"/>'+'<br>'
							+'Funder Mail:<span class="noedit funderMail">'+ app.funderMail +'</span><input class="edit funderMail"/> '+'<br>'
							+'Phone Number:<span class="noedit phoneNo">'+ app.phoneNo +'</span><input class="edit phoneNo"/> '+'<br>'
							+'Address:<span class="noedit address">'+ app.address +'</span><input class="edit address"/> '+'<br>'
							+'Amount:<span class="noedit amount">'+ app.amount +'</span><input class="edit amount"/>'+' <br>'
							+'<input type="button" id="'+ app.FID +'" value="Remove" class="btn btn-outline-danger remove">'+'<br>'
							+'<input type="button" " value="Edit" class="editapp btn btn-outline-primary noedit">'+'<br>'
							+'<input type="button" " value="Save" class="saveedit btn btn-outline-success edit">'+'<br>'
							+'<input type="button" " value="Cancel" class="canceledit btn btn-outline-danger edit"></li>');

			});
		},
		error: function() {
			alert('Funder loading error...');
		}
	});
	
	
	$('#btnSave').on('click', function(){
		
		//clear status messages
		$("#alertSuccess").text("");
		$("#alertSuccess").hide();
		$("#alertError").text("");
		$("#alertError").hide();
		
		//Form validation
		var status = validateFunderForm(); 
		

		
		//Check not valid
		if (status != true)
		 {
			 $("#alertError").text(status);
			 $("#alertError").show();
			 return;
		 } 
		
		
        //IF valid		
		var app = {
				funderName: $funderName.val(),
				funderMail: $funderMail.val(),
				phoneNo: $phoneNo.val(),
				address: $address.val(),
				amount: $amount.val(),

		};
		

		
		$.ajax({
			headers: { 
		        'Accept': 'application/json',
		        'Content-Type': 'application/json' 
		    },
			type: 'POST',
			url: 'http://localhost:8080/Funder/webapi/Funder/funder/',
			data: JSON.stringify(app),
			dataType: 'json',
			success: function(newFunder){
				console.log("Inserted");
				$apps.append('<li><div class="card shadow-lg p-3 mb-5 bg-white rounded bg-light m-2\" style=\"width: 12rem;float: left;">'
						+'funderName:<span class="noedit funderName">' + newFunder.funderName +'</span><input class="edit funderName"/>'+'<br>'
						+'funderMail:<span class="noedit funderMail">'+ newFunder.funderMail +'</span><input class="edit funderMail"/> '+'<br>'
						+'Phone No:<span class="noedit phoneNo">'+ newFunder.phoneNo +'</span><input class="edit phoneNo"/> '+'<br>'
						+'Address:<span class="noedit address">'+ newFunder.address +'</span><input class="edit address"/>'+'<br>'
						+'Amount:<span class="noedit amount">'+ newFunder.amount +'</span><input class="edit amount"/> '+'<br>'
						+'<input type="button" id="'+ newFunder.FID +'" value="Remove" class="btn btn-outline-danger remove">'+'<br>'
						+'<input type="button" " value="Edit" class="editapp btn btn-outline-primary noedit">'+'<br>'
						+'<input type="button" " value="Save" class="saveedit btn btn-outline-success edit">'+'<br>'
						+'<input type="button" " value="Cancel" class="canceledit btn btn-outline-danger edit"></li>');
				
				//Show Success Message
				$("#alertSuccess").text("Your Funder Details Saved Successfully");
				$("#alertSuccess").show();

				$("#formFunder")[0].reset(); 
				
			},
			
			error: function() {
				alert('Funder Saving Error');
			}
		});
		
		function validateFunderForm()
		{
			// Funder NAME
			if ($("#funderName").val().trim() == "")
			 {
			 return "Insert funder name.";
			 }

			//Funder mail
			if ($("#funderMail").val().trim() == "")
			 {
			 return "Insert funder Mail.";
			 }

			//Phoine No
			if ($("#phoneNo").val().trim() == "")
			 {
			 return "Insert phoneNo.";
			 }

			//address
			if ($("#address").val().trim() == "")
			 {
			 return "Insert address.";
			 }
          
//amount
			if ($("#amount").val().trim() == "")
			 {
			 return "Insert amount.";
			 }

			return true;
		}
		

		
	});
	
	
	$apps.delegate('.remove','click',function(){
		var $li=$(this).closest('li');
		var self = this;
		$.ajax({
			type:'DELETE',
			url:'http://localhost:8080/Funder/webapi/Funder/funder/'+$(this).attr('id'),
			success: function(){
				console.log("Deleted");
				$(self);
				$li.fadeOut(300,function(){
					$(this).remove();
					
					
					
				})
				
			},
		
			error: function() {
				alert('Funder Delete Error');
			}
		});
	});
	
	
$apps.delegate('.editapp','click',function(){
		
		var $li=$(this).closest('li');
		
		$li.find('input.fid').val($li.find('span.fid').html());
		$li.find('input.funderName').val($li.find('span.funderName').html());
		$li.find('input.funderMail').val($li.find('span.funderMail').html());
		$li.find('input.phoneNo').val($li.find('span.phoneNo').html());
		$li.find('input.address').val($li.find('span.address').html());
		$li.find('input.amount').val($li.find('span.amount').html());
		$li.addClass('edit');
	});
	
	$apps.delegate('.canceledit','click',function(){
		$(this).closest('li').removeClass('edit');
		
	});
	
	$apps.delegate('.saveedit','click',function(){
		var $li=$(this).closest('li');
		var app={
				
				funderName: $li.find('input.funderName').val(),
				funderMail: $li.find('input.funderMail').val(),
				phoneNo: $li.find('input.phoneNo').val(),
				address: $li.find('input.address').val(),
				amount: $li.find('input.amount').val()
				
		};
		
		$.ajax({
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
					
					
			},
			type: 'PUT',
			url: 'http://localhost:8080/Funder/webapi/Funder/funder',
			data: JSON.stringify(app),
			dataType: 'json',
			
			success: function(){

				$li.find('span.funderName').html(app.funderName);
				$li.find('span.funderMail').html(app.funderMail);
				$li.find('span.phoneNo').html(app.phoneNo);
				$li.find('span.address').html(app.address);
				$li.find('span.amount').html(app.amount);
				$li.removeClass('edit');
				
				$("#alertSuccess").text("Your Funder Details Updated Successfully");
				$("#alertSuccess").show();
				},
		
				error: function(){
				alert('Funder Update Error');
			}
			
		});
	});
	
	
	
	
	
	
});
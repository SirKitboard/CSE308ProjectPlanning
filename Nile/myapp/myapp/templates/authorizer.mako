<%inherit file="myapp:templates/template.mako" />
<%def name="title()">Add Item</%def>
<%def name="head()">
</%def>
<%def name="body()">
<div style="text-align:center">
Redirecting<br/>
<div class="preloader-wrapper big active" style="margin: auto">
 <div class="spinner-layer spinner-blue">
   <div class="circle-clipper left">
     <div class="circle"></div>
   </div><div class="gap-patch">
     <div class="circle"></div>
   </div><div class="circle-clipper right">
     <div class="circle"></div>
   </div>
 </div>

 <div class="spinner-layer spinner-red">
   <div class="circle-clipper left">
     <div class="circle"></div>
   </div><div class="gap-patch">
     <div class="circle"></div>
   </div><div class="circle-clipper right">
     <div class="circle"></div>
   </div>
 </div>

 <div class="spinner-layer spinner-yellow">
   <div class="circle-clipper left">
     <div class="circle"></div>
   </div><div class="gap-patch">
     <div class="circle"></div>
   </div><div class="circle-clipper right">
     <div class="circle"></div>
   </div>
 </div>

 <div class="spinner-layer spinner-green">
   <div class="circle-clipper left">
     <div class="circle"></div>
   </div><div class="gap-patch">
     <div class="circle"></div>
   </div><div class="circle-clipper right">
     <div class="circle"></div>
   </div>
 </div>
</div>
</div>
</%def>
<%def name="scripts()">
<script type="text/javascript" src="${request.static_url('myapp:static/js/authorizer.js')}"></script>
</%def>

(this.webpackJsonpfoodparadise=this.webpackJsonpfoodparadise||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/food-header.b8ff6505.jpg"},36:function(e,t,a){e.exports=a(67)},41:function(e,t,a){},47:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(32),l=a.n(c),s=(a(41),a(8)),i=a(9),o=a(12),m=a(11),u=a(10),d=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary sticky-top"},n.a.createElement(u.b,{className:"navbar-brand text-white",href:"/"},"Sa Pu Makanan"))},E=(a(47),function(){return n.a.createElement("footer",{className:"my-footer"},n.a.createElement("div",{className:"text-center"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-4 text-center"},n.a.createElement("h5",null,"About Sa Pu Makanan"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"/#"},"About Us")),n.a.createElement("li",null,n.a.createElement("a",{href:"/#"},"Contact Us")))),n.a.createElement("div",{className:"col-sm-4 text-center"},n.a.createElement("h5",null,"Support"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"/#"},"FAQ")),n.a.createElement("li",null,n.a.createElement("a",{href:"/#"},"Help desk")),n.a.createElement("li",null,n.a.createElement("a",{href:"/#"},"Forums")))),n.a.createElement("div",{className:"col-sm-4 text-center"},n.a.createElement("h5",null,"Download App"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"/#"},"Google App")),n.a.createElement("li",null,n.a.createElement("a",{href:"/#"},"App Store")))))),n.a.createElement("div",{className:"social-networks"},n.a.createElement("a",{href:"/#",className:"twitter"},n.a.createElement("i",{className:"fa fa-twitter"})),n.a.createElement("a",{href:"/#",className:"facebook"},n.a.createElement("i",{className:"fa fa-facebook-official"})),n.a.createElement("a",{href:"/#",className:"google"},n.a.createElement("i",{className:"fa fa-google-plus"}))),n.a.createElement("div",{className:"text-center footer-copyright"},n.a.createElement("p",null,"Copyright \xa9 2020 Sa Pu Makanan"))))}),h=a(34),v=a.n(h),y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row",style:{marginBottom:30}},n.a.createElement("img",{src:v.a,width:"100%",alt:"Aneka Makanan"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card text-white bg-success mb-3 text-center"},n.a.createElement("div",{className:"card -header bg-success"},n.a.createElement("h1",null,"Welcome to Sa Pu Makanan")),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"The Easiest Way to  Find Restaurants and Food"),n.a.createElement("p",{className:"card-text"},"You can grab information about restaurants, cafees, cuisines with just a few clicks."),n.a.createElement("p",{className:"card-text"},"Start by choosing the featured cities below, or search the city name."))))))},g=function(e){return n.a.createElement("div",{className:"col-4"},n.a.createElement("div",{className:"card bg-light mb-3"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h3",{className:"card-title"},e.city.name),n.a.createElement("p",null,e.city.country_name),n.a.createElement(u.b,{to:"/city/".concat(e.city.id),className:"card-text"},"See restaurants in ",e.city.name))))},f=function(e){return e.length>0?e.map((function(e){return n.a.createElement(g,{key:e.id,city:e})})):n.a.createElement("div",{className:"col"},n.a.createElement("p",{className:"text-danger"},"Data not found!"))},b=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h3",null,e.title),!0===e.showSubtitle&&""!=e.subtitle&&n.a.createElement("h6",{className:"text-muted"},"Search result for keyword '",e.subtitle,"'"))),n.a.createElement("div",{className:"row"},null==e.cities?n.a.createElement("div",{className:"col"},n.a.createElement("p",null,"Loading ...")):f(e.cities)))},N=function(e){return n.a.createElement("div",{className:"row",style:{marginBottom:30}},n.a.createElement("div",{className:"col"},n.a.createElement("h3",null,"Search City"),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"col-11"},n.a.createElement("input",{className:"form-control",type:"text",placeholder:"Type keyword or city name",value:e.value,onChange:e.onChange})),n.a.createElement("div",{className:"col-1"},n.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:e.onClickSearch},"Search")))))))},p=a(7),w=a.n(p),k={baseUrl:"https://developers.zomato.com/api/v2.1",api_key:"7ee53a0b2a75315eff956a21be3b47ec"},C=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).changeKeywordHandler=function(t){e.setState({keyword:t.target.value})},e.searchHandler=function(){var t=e.state.keyword,a="".concat(k.baseUrl,"/cities");w.a.get(a,{headers:{"user-key":k.api_key},params:{q:t}}).then((function(a){var r=a.data;"success"===r.status&&e.setState({citiesResultSearch:r.location_suggestions,keyword:"",cityKeywordSearch:t})})).catch((function(e){return console.log(e)}))},e.getFeaturedCities=function(){var t="".concat(k.baseUrl,"/cities");w.a.get(t,{headers:{"user-key":k.api_key},params:{city_ids:"74,11052,170"}}).then((function(t){var a=t.data;"success"===a.status&&e.setState({featuredCities:a.location_suggestions})})).catch((function(e){return console.log(e)}))},e.state={keyword:"",featuredCities:null,citiesResultSearch:null,cityKeywordSearch:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getFeaturedCities()}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,null),n.a.createElement("div",{className:"container",style:{marginTop:30,marginBottom:30}},n.a.createElement(b,{cities:this.state.featuredCities,title:"Featured Cities"}),n.a.createElement(N,{value:this.state.keyword,onChange:this.changeKeywordHandler,onClickSearch:this.searchHandler}),""!==this.state.cityKeywordSearch&&n.a.createElement(b,{title:"Search Result",cities:this.state.citiesResultSearch,showSubtitle:!0,subtitle:this.state.cityKeywordSearch})))}}]),a}(r.Component),_=a(16),S=a(35),x=function(e){return e.categories?n.a.createElement("div",{className:"list-group"},e.categories.map((function(t){return n.a.createElement("button",{key:t.id,className:"list-group-item list-group-item-action "+(e.categorySelected&&t.id===e.categorySelected.id?"active":""),onClick:function(){return e.categoryClickHandler(t)}},t.name)}))):n.a.createElement("p",null,"Loading...")},j=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h5",null,"Keyword"),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"col-10"},n.a.createElement("input",{className:"form-control",type:"text",placeholder:"Type keyword i.e : restaurant's name, location, cuisine, etc.",value:e.keyword,onChange:e.changeKeywordHandler})),n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:e.onClickAddToCriteria},"Add to criteria"))))))},H=function(e){return n.a.createElement("div",{className:"card bg-light mb-3",style:{marginTop:20}},n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-title"},"Find Restaurants based on criteria : "),n.a.createElement("table",{className:"table table-hover"},n.a.createElement("tbody",null,e.criteria.map((function(t,a){return n.a.createElement("tr",{key:a,className:"table-active"},n.a.createElement("td",{width:"40%"},t.criteriaName),n.a.createElement("td",{width:"50%"},t.data.name),n.a.createElement("td",null,"City"!==t.criteriaName&&n.a.createElement("i",{className:"fa fa-times","aria-hidden":"true",style:{color:"red"},onClick:function(){return e.removeCriteriaHandler(a)}})))})))),n.a.createElement("div",{className:"pull-right"},n.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:e.onClickSearch},"Search"))))},O=function(e){return n.a.createElement("div",{className:"btn btn-sm",style:{color:"white",backgroundColor:"#".concat(e.labelColor),borderColor:"#".concat(e.labelColor)}},e.text)},R=function(e){return n.a.createElement("div",{className:"col-6",style:{marginBottom:20}},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"},n.a.createElement("img",{className:"img-responsive",src:e.restaurant.thumb,alt:"",style:{borderRadius:5,width:100}})),n.a.createElement("div",{className:"col-9"},n.a.createElement("h4",{className:"text-success",style:{fontWeight:800}},e.restaurant.name),n.a.createElement("h6",null,e.restaurant.location.locality),n.a.createElement("h6",{className:"text-muted"},e.restaurant.location.address)))),n.a.createElement("div",{className:"card-body"},n.a.createElement("table",{className:"table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Rating"),n.a.createElement("td",null,n.a.createElement(O,{labelColor:e.restaurant.user_rating.rating_color,text:"".concat(e.restaurant.user_rating.aggregate_rating," (").concat(e.restaurant.user_rating.rating_text,")")}))),n.a.createElement("tr",null,n.a.createElement("td",null,"Cuisines"),n.a.createElement("td",null,e.restaurant.cuisines)),n.a.createElement("tr",null,n.a.createElement("td",null,"Cost for two"),n.a.createElement("td",null,e.restaurant.currency+" "+e.restaurant.average_cost_for_two))))),n.a.createElement("div",{className:"card-footer"},n.a.createElement(u.b,{to:"/restaurant/".concat(e.restaurant.id),style:{textDecoration:"none"}},n.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-block"},"View Restaurant Details")))))},D=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).searchHandler=function(){e.setState({restaurants:null});var t,a="".concat(k.baseUrl,"/search"),r={},n=Object(S.a)(e.state.criteria);try{for(n.s();!(t=n.n()).done;){var c=t.value;switch(c.criteriaName){case"City":r.entity_id=c.data.id,r.entity_type="city";break;case"Category":case"Category":r.category=c.data.id;break;case"Keyword":r.q=c.data.name}}}catch(l){n.e(l)}finally{n.f()}w.a.get(a,{headers:{"user-key":k.api_key},params:r}).then((function(t){var a=t.data;e.setState({restaurants:a.restaurants})})).catch((function(e){return console.log(e)}))},e.transformCategoriesData=function(e){return e.map((function(e){return e.categories}))},e.getCityData=function(t){var a="".concat(k.baseUrl,"/cities");w.a.get(a,{headers:{"user-key":k.api_key},params:{city_ids:"".concat(t)}}).then((function(t){var a=t.data.location_suggestions[0],r={criteriaName:"City",data:a},n=Object(_.a)(e.state.criteria);n.push(r),e.setState({city:a,criteria:n})})).catch((function(e){return console.log(e)}))},e.categoryClickHandler=function(t){var a=Object(_.a)(e.state.criteria),r={criteriaName:"Category",data:t};(a=a.filter((function(e){return"Category"!==e.criteriaName}))).push(r),e.setState({categorySelected:t,criteria:a})},e.changeKeywordHandler=function(t){e.setState({keyword:t.target.value})},e.addToCriteriaHandler=function(){var t=Object(_.a)(e.state.criteria);t=t.filter((function(e){return"Keyword"!==e.criteriaName}));var a={criteriaName:"Keyword",data:{name:e.state.keyword}};t.push(a),e.setState({keyword:"",criteria:t})},e.removeCriteriaHandler=function(t){var a=Object(_.a)(e.state.criteria);a.splice(t,1),e.setState({criteria:a})},e.getCategoriesData=function(){var t="".concat(k.baseUrl,"/categories");w.a.get(t,{headers:{"user-key":k.api_key}}).then((function(t){var a=t.data,r=e.transformCategoriesData(a.categories);e.setState({categories:r})})).catch((function(e){return console.log(e)}))},e.renderRestaurantList=function(){return null==e.state.restaurants?n.a.createElement("div",{className:"col"},n.a.createElement("p",null,"Loading...")):e.state.restaurants.length>0?e.state.restaurants.map((function(e){var t=e.restaurant;return n.a.createElement(R,{key:t.id,restaurant:t})})):n.a.createElement("div",{className:"col"},n.a.createElement("p",null,"No Data available. Please select criteria, and click Search"))},e.state={city:null,categories:null,categorySelected:null,keyword:"",criteria:[],restaurants:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.city_id;this.getCityData(e),this.getCategoriesData()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container-fluid",style:{marginTop:30,marginBottom:30}},this.state.city&&n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h4",{className:"text-success"},"Restaurant in ",this.state.city.name,",",this.state.city.country_name))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"},n.a.createElement("h5",null,"Categories"),n.a.createElement(x,{categories:this.state.categories,categorySelected:this.state.categorySelected,categoryClickHandler:function(t){return e.categoryClickHandler(t)}})),n.a.createElement("div",{className:"col"},n.a.createElement(j,{keyword:this.state.keyword,changeKeywordHandler:this.changeKeywordHandler,onClickAddToCriteria:this.addToCriteriaHandler}),n.a.createElement(H,{criteria:this.state.criteria,removeCriteriaHandler:function(t){return e.removeCriteriaHandler(t)},onClickSearch:this.searchHandler}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col",style:{marginBottom:10}},n.a.createElement("h4",{className:"text-success"},"Restaurant List"))),n.a.createElement("div",{className:"row"},this.renderRestaurantList()))))}}]),a}(r.Component),K=function(e){return n.a.createElement("div",{className:"card border-success",style:{marginBottom:5}},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row",style:{marginBottom:20}},n.a.createElement("div",{className:"col-1",style:{border:"0px solid black"}},n.a.createElement("img",{class:"img-responsive",src:e.review.user.profile_image,alt:"",style:{borderRadius:"50%",width:80}})),n.a.createElement("div",{className:"col-11",style:{border:"0px solid black"}},n.a.createElement("h6",{className:"font-weight-bold"},e.review.user.name),n.a.createElement(O,{text:"".concat(e.review.user.foodie_level_num," (").concat(e.review.user.foodie_level,")"),labelColor:"".concat(e.review.user.foodie_color)}))),n.a.createElement("h6",{className:"card-text text-muted"},e.review.review_time_friendly),n.a.createElement(O,{text:"".concat(e.review.rating," (").concat(e.review.rating_text,")"),labelColor:"".concat(e.review.rating_color)}),n.a.createElement("p",{className:"card-text"},e.review.review_text)))},B=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},e.restaurant?n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"text-success",style:{fontWeight:800}},e.restaurant.name),n.a.createElement("h6",{style:{fontWeight:600}},e.restaurant.location.locality),n.a.createElement("h6",{className:"text-muted"},e.restaurant.location.address)):n.a.createElement("p",null,"Loading...")))),n.a.createElement("div",{className:"card-body"},e.restaurant?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("img",{class:"img-responsive",src:e.restaurant.featured_image,alt:"",style:{borderRadius:5,width:500}})),n.a.createElement("div",{className:"col-6"},n.a.createElement("table",{className:"table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Rating"),n.a.createElement("td",null,n.a.createElement(O,{labelColor:e.restaurant.user_rating.rating_color,text:"".concat(e.restaurant.user_rating.aggregate_rating," (").concat(e.restaurant.user_rating.rating_text,")")}))),n.a.createElement("tr",null,n.a.createElement("td",null,"Cuisines"),n.a.createElement("td",null,e.restaurant.cuisines)),n.a.createElement("tr",null,n.a.createElement("td",null,"Cost for two"),n.a.createElement("td",null,e.restaurant.currency+" "+e.restaurant.average_cost_for_two)))))):n.a.createElement("p",null,"Loading...")))},F=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getRestaurantData=function(t){var a="".concat(k.baseUrl,"/restaurant");w.a.get(a,{headers:{"user-key":k.api_key},params:{res_id:t}}).then((function(t){var a=t.data;e.setState({restaurant:a})})).catch((function(e){return console.log(e)}))},e.getReviewsData=function(t){var a="".concat(k.baseUrl,"/reviews");w.a.get(a,{headers:{"user-key":k.api_key},params:{res_id:t}}).then((function(t){var a=t.data;e.setState({reviews:a.user_reviews})})).catch((function(e){return console.log(e)}))},e.state={restaurant:null,reviews:null},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params;this.getRestaurantData(e.restaurant_id),this.getReviewsData(e.restaurant_id)}},{key:"render",value:function(){return n.a.createElement("div",{className:"container",style:{marginTop:30,marginBottom:30}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12",style:{marginBottom:20}},n.a.createElement(B,{restaurant:this.state.restaurant}),n.a.createElement("div",{className:"col-12",style:{marginBottom:20}},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"text-success",style:{fontWeight:800}},"Reviews"),this.state.reviews?this.state.reviews.map((function(e){var t=e.review;return n.a.createElement(K,{key:t.id,review:t})})):n.a.createElement("p",null,"Loading...")))))))}}]),a}(r.Component),T=a(1),A=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(u.a,null,n.a.createElement(d,null),n.a.createElement(T.a,{path:"/",exact:!0,component:C}),n.a.createElement(T.a,{path:"/city/:city_id",component:D}),n.a.createElement(T.a,{path:"/restaurant/:restaurant_id",component:F}),n.a.createElement(E,null))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),a(64).config()}},[[36,1,2]]]);
//# sourceMappingURL=main.c1a2080e.chunk.js.map
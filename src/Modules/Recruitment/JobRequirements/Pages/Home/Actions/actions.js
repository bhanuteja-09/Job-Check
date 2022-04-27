
import axios from "axios";
import * as types from "./actionType";
import db from "../../../../../../firebase"


const getRequirements = (Requirements) => ({
    type: types.GET_REQUIREMENTS,
    payload: Requirements,
});



const requirementAdded = () => ({
    type: types.ADD_REQUIREMENT,
    
})
const requirementUpdated = () => ({
    type: types.UPDATE_REQUIREMENT,
    
})
const filterActive = (Requirement) => ({
    type: types.FILTER_REQUIREMENT_ACTIVE,
    payload:Requirement,
    
})
const filterInActive = (Requirement) => ({
    type: types.FILTER_REQUIREMENT_INACTIVE,
    payload:Requirement,
    
})
const sort = (Requirements) => ({
    type: types.SORT_REQUIREMENT,
    payload:Requirements,
    
})
const getTotal =(Requirement)=>({
    type:types.GET_TOTALREQUIREMENTS,
    payload:Requirement,

})



const getRequirement = (Requirement) => ({
    type: types.GET_SINGLE_REQUIREMENT,
    payload:Requirement,
    
})
const requirementDeleted = () => ({
    type: types.DELETE_REQUIREMENT,

})


// Get All Requirements From DB
export const loadRequirements = () => {
    return function (dispatch) {
        db.collection("Requirement").onSnapshot((querySnapshot)=>{
            const Requirement=[]
            querySnapshot.forEach((doc)=>{
                Requirement.push({...doc.data(),id:doc.id})
            })
            const Total = Requirement.length
           dispatch(getRequirements(Requirement))
            dispatch(getTotal(Total))
        })  
    }
}
// Add Requirement Function
export const addRequiremets = (Requirement) =>{
    return function (dispatch){
        db.collection("Requirement").doc().set(Requirement);
        dispatch(requirementAdded());
        
    }

}
// Edit Requirement Function
export const getSingleRequirement = (id) => {
    return function (dispatch) {
        db.collection("Requirement").doc(id).get().then((Requirement)=>{
            dispatch(getRequirement({...Requirement.data()}))
        })
   
       
        .catch((error) => console.log(error));
    };
};


// Update Requirements Function
export const updateRequirement = (Requirement,id) => {
    return function (dispatch) {
        db.collection("Requirement").doc(id).update(Requirement);
            dispatch(requirementUpdated());
            dispatch(loadRequirements());
          
        }
        
    };


// Filter Requiremets Active
export const filterRequirementActive = (status) => {
    return function (dispatch) {
        db
  .collection("Requirement")
  .where('status', '==', "Active")
  .get()
  .then(querySnapshot => {
    const Requirement=[]
    querySnapshot.forEach((doc)=>{
    Requirement.push({...doc.data(),id:doc.id})
  });
  dispatch(filterActive(Requirement))
})  .catch((error) => console.log(error));
     }
}


// Filter Requirements InActive
export const filterRequirementInActive = (status) => {
    return function (dispatch) {
        db
  .collection("Requirement")
  .where('status', '==', "InActive")
  .get()
  .then(querySnapshot => {
    const Requirement=[]
    querySnapshot.forEach((doc)=>{
    Requirement.push({...doc.data(),id:doc.id})
  });
  dispatch(filterInActive(Requirement))
})  .catch((error) => console.log(error));
     }
}


// sort Requirements Function 
export const sortRequirement = (Requirement) => {
    return function (dispatch) {
        db.collection("Requirement")
         .orderBy("title", "asc").get()
         .then(querySnapshot => {
           const Requirement=[]
           querySnapshot.forEach((doc)=>{
           Requirement.push({...doc.data(),id:doc.id})
         });
         dispatch(sort(Requirement))
        
    });
}
}
export const deleteRequirement = (id) => {
    return function (dispatch) {
        db.collection("Requirement").doc(id).delete();
        dispatch(requirementDeleted());
        
};
}




public class contactTriggerHandler extends TriggerHandler {
    
    
    Public override void afterInsert(){
        try{
            createAccountRole((List<Contact>)Trigger.New);
        }Catch(Exception E){
            System.debug('Error Occured in Class => contactTriggerHandler | Method => afterInsert');
            System.debug('at line number =>' + E.getLineNumber());
            System.debug('Error message =>' + E.getMessage());
            System.debug('Error message =>' + E.getCause());
        }
                
    }
    
    private void createAccountRole(List<Contact> conList){
        
        try{
            
            //variable
            Map<String,List<String>> accContactIdMap = new Map<String,List<String>>();
            Map<String,AccountContactRole> accIdAccountContactRoleMap = new Map<String,AccountContactRole>();
            List<AccountContactRole> accountContactRoleList = new List<AccountContactRole>();
            
            
            //operations 
            for(Contact con: conList){
                if(!accContactIdMap.containsKey(con.AccountId)){
                    accContactIdMap.put(con.AccountId,new List<String>{con.Id});
                }else{
                    List<String> conIdList = accContactIdMap.get(con.AccountId);
                    conIdList.add(con.Id);
                    accContactIdMap.put(con.AccountId,conIdList);
                }
            }
            
            for(AccountContactRole eachrecord: [SELECT Id, AccountId, Role FROM AccountContactRole where AccountId In: accContactIdMap.keySet() and Role='Billing']){
                accIdAccountContactRoleMap.put(eachrecord.AccountId,eachrecord);
            }
            
            
            for(String accId:accContactIdMap.keySet()){
                if(!accIdAccountContactRoleMap.containsKey(accId)){
                    AccountContactRole newrecord = new AccountContactRole();
                    newrecord.AccountId = accId;
                    newrecord.ContactId = accContactIdMap.get(accId)[0];
                    newrecord.Role = 'Billing';
                    accountContactRoleList.add(newrecord);
                }
            }
            
            List<Database.SaveResult> insertResultList = Database.insert(accountContactRoleList,false);
    	}
       Catch(Exception E){
            System.debug('Error Occured in Class => contactTriggerHandler | Method => createAccountRole');
            System.debug('at line number =>' + E.getLineNumber());
            System.debug('Error message =>' + E.getMessage());
            System.debug('Error message =>' + E.getCause());
       }
    }
        
}
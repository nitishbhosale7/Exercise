trigger contactTrigger on Contact (after insert) {

    new contactTriggerHandler().run();
 }
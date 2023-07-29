import { LightningElement } from 'lwc';
import logoImage from '@salesforce/resourceUrl/expedite';

export default class OppurtunityDataTableFixedColumn extends LightningElement {
    logo = logoImage;
    
   
    tableHeader = ['Option','Attribute','Revenue Type','QTY','Unit Price','Start Month','Months','Revenue Recognition','Commited','Jan 2018','Feb 2018','Mar 2018','Apr 2018','May 2018','Jun 2018','Jul 2018','Aug 2018','Sep 2018','Oct 2018','Nov 2018','Dec 2018','Jan 2019','Feb 2019','Mar 2019','Apr 2019','May 2019','Jun 2019','Jul 2019','Aug 2019','Sep 2019','Oct 2019','Nov 2019','Dec 2019'];
    tableData = [{unitPrice: 95,startMonth: "2/1/2019",revenueType: "MRC",revenueRecognitionName: '-',revenueRecognitionId: '-',qty: 1,productItemName: "Captio User Delegation",productItemId: "a01A000001gmFXZIA2",productFLIId: "a2m2G000000AJKQQA4",priorMRR: '-',optionItemName: '-',optionItemId: '-',optionFLIId: '-',monthsVR: '-',monthsNRC: '-',monthsMRC: '-',months: 18,displayUnitPrice: "$95.00",displayQty: "1",displayPriorMRR: '-',committed: "No",attributesWithValues: '-',attributes: '-'}
    ,{unitPrice: 55,startMonth: "3/1/2019",revenueType: "NRC",revenueRecognitionName: '-',revenueRecognitionId: '-',qty: 1,productItemName: "TNS Link",productItemId: "a01A000001utm3RIAQ",productFLIId: "a2m2G000009H0fHQAS",priorMRR: '-',optionItemName: '-',optionItemId: '-',optionFLIId: '-',monthsVR: '-',monthsNRC: '-',monthsMRC: '-',months: 12,displayUnitPrice: "$55.00",displayQty: "1",displayPriorMRR: '-',committed: "No",attributesWithValues: '-',attributes: '-'},
    {unitPrice: 100,startMonth: "2/1/2019",revenueType: "MRC",revenueRecognitionName: '-',revenueRecognitionId: '-',qty: 1,productItemName: "TNS Link",productItemId: "a01A000001utm3RIAQ",productFLIId: "a2m2G000009H0fIQAS",priorMRR: '-',optionItemName: '-',optionItemId: '-',optionFLIId: '-',monthsVR: '-',monthsNRC: '-',monthsMRC: '-',months: 24,displayUnitPrice: "$100.00",displayQty: "1",displayPriorMRR: '-',committed: "No",attributesWithValues: '-',attributes: '-'},
    {unitPrice: 100,startMonth: "2/1/2019",revenueType: "MRC",revenueRecognitionName: '-',revenueRecognitionId: '-',qty: 1,productItemName: "TNS Link",productItemId: "a01A000001utm3RIAQ",productFLIId: "a2m2G000009H0fIQAS",priorMRR: '-',optionItemName: '-',optionItemId: '-',optionFLIId: '-',monthsVR: '-',monthsNRC: '-',monthsMRC: '-',months: 24,displayUnitPrice: "$100.00",displayQty: "1",displayPriorMRR: '-',committed: "No",attributesWithValues: '-',attributes: '-'}];
    totalTableData = [{unitPrice: "",startMonth: "",revenueType: "",revenueRecognitionName: '',revenueRecognitionId: '',qty: '',productItemName: "",productItemId: "",productFLIId: "",priorMRR: '$55.00',optionItemName: '$55.00',optionItemId: '$55.00',optionFLIId: '$55.00',monthsVR: '$55.00',monthsNRC: '$55.00',monthsMRC: '$55.00',months: '$55.00',displayUnitPrice: "$55.00",displayQty: "$55.00",displayPriorMRR: '$55.00',committed: "$55.00",attributesWithValues: '$55.00',attributes: '$55.00'}]

    renderedCallback(){
        this.onload(); 
        this.listDropdown();
    }

    
    // Drop Down Script 
    listDropdown(){
        const selected = this.template.querySelector(".selected");
        const optionsContainer = this.template.querySelector(".options-container");
        const optionsList = this.template.querySelectorAll(".option");
        selected.addEventListener("click", () => {
            optionsContainer.classList.toggle("active");
        });
        optionsList.forEach(o => {
            o.addEventListener("click", () => {
                selected.innerHTML = o.querySelector("label").innerHTML;
                optionsContainer.classList.remove("active");
            });     
        });
    }


    // Table Script 
    onload() {
        var fcBody = this.template.querySelector(".fixColumn > .tbody"),
            rcBody = this.template.querySelector(".restColumns > .tbody"),
            rcHead = this.template.querySelector(".restColumns > .thead");
        rcBody.addEventListener("scroll", function() {
            fcBody.scrollTop = this.scrollTop;
            rcHead.scrollLeft = this.scrollLeft;
        }, { passive: true });
    };
}
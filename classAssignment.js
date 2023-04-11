class Job {  //Job template with properties
    constructor(name, industry, requiresDegree, field, salary) {
        this.name = name;
        this.industry = industry;
        this.requiresDegree = requiresDegree;
        this.field = field;
        this.salary = salary;
    }
    //Methods to be used
    getName() {
        return this.name;
    }

    getFieldAndIndustry() {
        return `${this.field} in the ${this.industry} industry`;
    }

    getSalary() {
        return `The salary range for this job is ${this.salary}`;
    }
}
//Extended class
class TechJob extends Job {
    constructor(name, industry, requiresDegree, field, salary, technology) {
        super(name, industry, requiresDegree, field, salary);
        this.technology = technology;
    }

    getTechnology() {
        return `The position of ${this.name} requires knowledge of ${this.technology}`;
    }

    getJobDescription() {
        return `${this.name} is a ${this.field} position in the ${this.industry} industry, and it requires knowledge of ${this.technology}.`;
    }
}

//Three instances of the Job class
const softwareEngineer = new Job("Lord of All Things Technical", "Tech", true, "Software Engineering", "$80,000 - $120,000");
const marketingManager = new Job("Wizard of Light Bulb Moments", "Marketing", true, "Management", "$60,000 - $100,000");
const graphicDesigner = new Job("Comic Sans Annihilator Graphic Designer", "Creative", false, "Design", "$40,000 - $70,000");

//Console logged 2 methods for each instance
console.log(softwareEngineer.getName());
console.log(softwareEngineer.getFieldAndIndustry());
console.log(marketingManager.getName());
console.log(marketingManager.getSalary());
console.log(graphicDesigner.getName());
console.log(graphicDesigner.getFieldAndIndustry());


//New instance of extended class
const frontEndDeveloper = new TechJob("Interwebs Mechanic", "Tech", true, "Front-End Software Engineering", "$70,000 - $110,000", "JavaScript");

//2 new methods from the extended class
console.log(frontEndDeveloper.getTechnology());
console.log(frontEndDeveloper.getJobDescription());
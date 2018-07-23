import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'davidjash2@gmail.com')
  proposalTwo: Proposal = new Proposal(99, 'XYZ Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'davidjash2@gmail.com')
  proposalThree: Proposal = new Proposal(300, 'Somethin Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'davidjash2@gmail.com')
  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}

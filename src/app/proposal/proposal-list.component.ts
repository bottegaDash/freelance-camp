import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Proposal } from './proposal';
import { ProposalService } from "./proposal.service";

@Component({
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css'],
  providers: [ ProposalService ]
})
export class ProposalListComponent implements OnInit{
  proposals: Proposal[] = []
  errorMessage: string;
  mode = "Observable";

  constructor(
    private proposalService: ProposalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProposals()
  }

  getProposals() {
    this.proposalService.getProposals()
        .subscribe(
          documents => this.proposals = documents,
          error => this.errorMessage = <any>error
        )
  }

  goToShow(proposal: Proposal): void {
    let link = ["/proposal", proposal.id]
    this.router.navigate(link)
  }
}

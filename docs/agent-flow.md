sequenceDiagram
    autonumber
    actor U as You
    participant GH as GitHub (Issues/PR/Actions)
    participant CLA as Claude Code (Plan/Review)
    participant COD as Codex Cloud (@codex)

    U->>GH: Create Issue + label "plan:needed"
    GH-->>GH: Actions triggers on label

    GH->>CLA: Claude PLAN (Issue -> Plan comment)
    CLA->>GH: Plan comment + label "plan:approved" (remove plan:needed)

    GH-->>GH: Actions triggers on plan:approved
    GH->>COD: Comment "@codex" + PLAN + rules + "npm test"
    COD->>GH: Push commits + Open PR

    GH-->>GH: Actions triggers on PR opened/synchronize
    GH->>CLA: Claude REVIEW (check Acceptance Criteria + npm test)
    CLA->>GH: Verdict: APPROVE or REQUEST_CHANGES

    alt APPROVE
        GH-->>GH: Add label "merge:approved"
        GH->>GH: (Optional) Auto-merge or human merge
    else REQUEST_CHANGES
        GH-->>GH: Add label "changes:requested" + "needs:codex"
        GH->>COD: Comment "@codex" with fix checklist
        COD->>GH: Push follow-up commits
    end
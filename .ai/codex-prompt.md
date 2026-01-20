<!-- 给 Codex 的执行 Prompt（稳定产 PR） -->
@codex

Task: Implement the plan below and open/update a PR.

Rules:
1) Follow the plan order; keep each change minimal and coherent.
2) Run the Test Plan commands; paste results into PR description.
3) If tests fail, fix them; if unclear requirements, ask questions in PR.
4) Do not change unrelated code or formatting.
5) Prefer small commits; include a clear PR summary and risk notes.

--- PLAN ---
(paste plan here)

<!-- 这和 OpenAI 的 GitHub 集成“用评论触发 cloud task”的机制完全匹配 -->

<!-- 你照这套落地时，建议的 Labels（直接建）
	•	plan:needed
	•	plan:approved
	•	needs:codex
	•	needs:claude
	•	changes:requested
	•	merge:approved -->
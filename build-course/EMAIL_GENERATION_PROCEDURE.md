# Email Course Generation Procedure - Blue Collar Business School

## Overview
This document outlines the complete 7-phase procedure for generating, reviewing, and approving each email in the 84-day contractor business education course.

## Folder Structure
```
build-course/
├── research/
│   ├── day-XX-topic/
│   │   ├── industry-statistics.md
│   │   ├── best-practices.md
│   │   ├── common-problems.md
│   │   ├── case-studies.md
│   │   ├── tools-resources.md
│   │   └── citations.md
├── drafts/
│   ├── rough/
│   ├── second/
│   └── final/
├── reviews/
│   ├── contractor-perspective/
│   ├── visual-content/
│   └── final-review/
├── approved/
│   └── week-X/
└── emails/
    └── week-X/

```

---

## PHASE 1: Research & Documentation

### Objective
Gather comprehensive, verified information from multiple sources with proper citations.

### Process
1. **Create topic folder**: `research/day-XX-topic/`

2. **Research Components** (each in separate .md file):
   - **industry-statistics.md**: Current data, trends, benchmarks
   - **best-practices.md**: Proven methods from successful contractors
   - **common-problems.md**: Pain points and typical mistakes
   - **case-studies.md**: Real-world examples (anonymized)
   - **tools-resources.md**: Software, templates, calculators
   - **citations.md**: All sources with URLs and access dates

3. **Research Requirements**:
   - Minimum 5 authoritative sources
   - Include contractor forums, trade publications, government data
   - Focus on practical, actionable information
   - NO theoretical or academic-only content
   - Verify all statistics are current (within 2 years)

4. **Citation Format**:
   ```markdown
   [1] Source Name - "Article Title" - URL - Accessed: Date
   [2] Industry Report - "Specific Data Point" - Page X - URL
   ```

### Output
Organized research folder with 5-6 documented aspects, each with citations

---

## PHASE 2: Rough Draft Creation

### Objective
Synthesize research into cohesive, actionable email content.

### Process
1. **Read all research documents**
2. **Create draft structure**:
   ```markdown
   # Day X: [Topic Title]
   
   ## The Problem (Hook)
   [Contractor-specific pain point from research]
   
   ## What You'll Learn Today
   [3-5 bullet points]
   
   ## Core Content
   [500-800 words synthesizing research]
   
   ## Today's Action Item
   [Specific 30-60 minute task]
   
   ## Tools & Resources
   [From research/tools-resources.md]
   
   ## Common Mistakes to Avoid
   [From research/common-problems.md]
   
   ## Tomorrow's Preview
   [Next lesson teaser]
   ```

3. **Save as**: `drafts/rough/day-XX-topic.md`

### Output
Complete rough draft incorporating all research

---

## PHASE 3: Contractor Perspective Review

### Objective
Fresh evaluation from contractor's viewpoint with no project context.

### Agent Instructions
```yaml
Agent Type: general-purpose
Context: NONE about BBS or course structure
Task: Review this single email as if you're a busy contractor who just received it
```

### Review Questions for Agent:
1. Is this immediately useful to my business TODAY?
2. Can I implement this while managing jobsites?
3. Is the language clear without business school jargon?
4. Does the action item seem worth my time?
5. Are examples relevant to trades work?
6. What's confusing or unclear?
7. What's missing that I need to know?

### Review Output
Save detailed review to: `reviews/contractor-perspective/day-XX-review.md`

### Output Format:
```markdown
# Contractor Perspective Review - Day XX

## First Impression
[How it lands for a busy contractor]

## Clarity Score: X/10
[Specific unclear sections]

## Relevance Score: X/10
[Does this apply to my roofing/plumbing/electrical business?]

## Actionability Score: X/10
[Can I actually do this today?]

## Recommended Improvements
1. [Specific change]
2. [Specific change]

## Missing Elements
[What a contractor would expect but isn't there]
```

---

## PHASE 4: Strategic Improvement

### Objective
Thoughtfully improve content based on contractor review.

### Process
1. **Read contractor perspective review**
2. **Deep analysis** (<ultrathink> mode):
   - Which criticisms are valid?
   - How to simplify without losing value?
   - Where to add specific trade examples?
   - How to make action items more concrete?

3. **Create second draft** addressing:
   - Every clarity issue
   - Every relevance concern
   - Enhanced actionability
   - Missing elements

4. **Save as**: `drafts/second/day-XX-topic.md`

### Output
Improved second draft incorporating contractor feedback

---

## PHASE 5: Visual Content Assessment

### Objective
Identify ONLY essential visual elements that enhance understanding.

### Agent Instructions
```yaml
Agent Type: general-purpose
Task: Review content for places where visuals would significantly improve comprehension
Constraint: This is an EMAIL course, not a website. Only suggest if truly needed.
```

### Visual Categories to Consider:
1. **Calculation Examples**: Show math visually
2. **Before/After Comparisons**: Clear transformations
3. **Process Flowcharts**: Multi-step procedures
4. **Checklists**: Formatted for printing/saving
5. **Warning Boxes**: Critical mistakes to avoid

### Assessment Criteria:
- Does it clarify something complex?
- Can the concept be understood WITHOUT it?
- Is it printable/saveable for field use?
- Does it save the contractor time?

### Output
Save to: `reviews/visual-content/day-XX-visuals.md`

### Format:
```markdown
# Visual Content Recommendations - Day XX

## Essential Visuals (Must Have)
1. [Location in email]: [Type of visual]: [Why essential]

## Optional Visuals (Nice to Have)
1. [Location]: [Type]: [Benefit]

## Rejected Visual Ideas
1. [Idea]: [Why unnecessary]
```

---

## PHASE 6: Design Consistency & HTML Creation

### Objective
Maintain visual consistency across all 84 emails.

### Agent Instructions
```yaml
Agent Type: general-purpose
Task: Convert markdown to HTML with consistent BBS branding
Context: Load previous approved emails for style reference
```

### Design Standards:
```css
Primary Color: #1e3a8a (Navy Blue)
Secondary Color: #f59e0b (Construction Orange)
Background: #ffffff
Text Color: #1f2937
Font Family: Arial, sans-serif
Heading Font: Georgia, serif
```

### HTML Template Structure:
1. Header with BBS logo
2. Day counter badge
3. Content sections with consistent spacing
4. Action item in highlighted box
5. Footer with support links
6. Mobile-responsive design

### Output
Save to: `drafts/final/day-XX-topic.html`

---

## PHASE 7: Final Review & Approval

### Objective
Last quality check before marking as production-ready.

### Agent Instructions
```yaml
Agent Type: general-purpose
Task: Final review of HTML email for any issues
Focus: Technical accuracy, formatting, links, consistency
```

### Final Checklist:
- [ ] All facts verified and accurate
- [ ] No placeholder content or Lorem Ipsum
- [ ] Links tested and working
- [ ] Images have alt text
- [ ] Mobile preview checked
- [ ] Subject line compelling
- [ ] No typos or grammar issues
- [ ] Action item clearly defined
- [ ] Consistent with course progression
- [ ] No unauthorized emojis
- [ ] Citations properly formatted

### Review Output
Save to: `reviews/final-review/day-XX-final.md`

### Approval Decision:
```markdown
## APPROVAL STATUS: [APPROVED / NEEDS REVISION]

### If Needs Revision:
1. [Specific issue]
2. [Required change]

### If Approved:
- Move to: approved/week-X/
- Ready for: Production email system
- Scheduled for: Day XX of course
```

---

## Tracking & Documentation

### Progress Tracking File
`build-course/COURSE_PROGRESS.md`
```markdown
| Day | Topic | Research | Draft 1 | Review 1 | Draft 2 | Visuals | HTML | Final | Status |
|-----|-------|----------|---------|----------|---------|---------|------|-------|--------|
| 1   | Welcome | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | APPROVED |
| 2   | Business Structure | ✓ | ✓ | ⏳ | | | | | IN REVIEW |
```

---

## Agent Commands for Each Phase

### Phase 1 - Research
```
/task "Research Day X topic" -subagent general-purpose
```

### Phase 3 - Contractor Review
```
/task "Review email from contractor perspective with no context" -subagent general-purpose
```

### Phase 5 - Visual Assessment
```
/task "Assess visual content needs for email course" -subagent general-purpose
```

### Phase 6 - Design Consistency
```
/task "Convert to HTML with BBS design standards" -subagent general-purpose
```

### Phase 7 - Final Review
```
/task "Final review for production readiness" -subagent general-purpose
```

---

## Quality Gates

**No email proceeds to the next phase without:**
1. Phase 1: Complete citations for all research
2. Phase 3: Minimum 7/10 scores on all review metrics
3. Phase 5: Explicit justification for each visual
4. Phase 7: All checklist items verified

---

## Time Estimates

- Phase 1 (Research): 2-3 hours
- Phase 2 (Draft 1): 1 hour
- Phase 3 (Review): 30 minutes
- Phase 4 (Improvement): 45 minutes
- Phase 5 (Visual): 20 minutes
- Phase 6 (HTML): 30 minutes
- Phase 7 (Final): 15 minutes

**Total per email**: 5-6 hours
**Total for 84 emails**: 420-504 hours

---

*Last Updated: [Current Date]*
*Version: 1.0*
/* ============================================================
   단어 은행 — 빈도순 (앞쪽일수록 자주 쓰이고 우선 학습)
   w: 단어  pos: 품사  ko: 뜻  coll: 자주 붙는 짝(collocation)
   en: 예문  blank: 예문 속 실제 형태(타이핑 정답)  kx: 예문 해석
   ※ 기존 항목은 수정/삭제 금지 (학습 기록의 키로 쓰임). 새 항목만 뒤에 추가.
   ============================================================ */
const WORDS = [

/* ---------- 1구간: 업무·일상에서 가장 자주 쓰이는 핵심 동사 ---------- */
{ w:"acknowledge", pos:"동사", ko:"인정하다; (받았음을) 확인해 알리다",
  coll:"acknowledge a mistake / acknowledge receipt of ~",
  en:"He finally ______ that the report had a few errors.", blank:"acknowledged",
  kx:"그는 마침내 보고서에 오류가 몇 개 있었다고 인정했다." },

{ w:"address", pos:"동사", ko:"(문제를) 다루다, 처리하다",
  coll:"address an issue / address a concern  ※'주소'말고 이 뜻이 업무에선 더 흔해요",
  en:"We need to ______ this issue before the release.", blank:"address",
  kx:"출시 전에 이 문제를 처리해야 해요." },

{ w:"assume", pos:"동사", ko:"가정하다, 당연히 ~라고 여기다",
  coll:"assume responsibility / let's assume that ~",
  en:"I ______ the payment had already gone through, but it hadn't.", blank:"assumed",
  kx:"결제가 이미 처리된 줄 알았는데 아니었어요." },

{ w:"ensure", pos:"동사", ko:"반드시 ~하도록 하다, 보장하다",
  coll:"ensure that ~ / ensure accuracy  ※insure(보험)와 헷갈리지 마세요",
  en:"Please ______ that all the figures match before you submit it.", blank:"ensure",
  kx:"제출하기 전에 모든 수치가 일치하는지 확인해 주세요." },

{ w:"confirm", pos:"동사", ko:"확인해 주다, 확정하다",
  coll:"confirm a booking / just to confirm, ~",
  en:"Could you ______ whether the invoice was sent yesterday?", blank:"confirm",
  kx:"어제 청구서가 발송됐는지 확인해 주실 수 있나요?" },

{ w:"handle", pos:"동사", ko:"처리하다, 감당하다",
  coll:"handle a request / handle the workload",
  en:"Can the server ______ that many requests at once?", blank:"handle",
  kx:"서버가 그렇게 많은 요청을 한 번에 감당할 수 있나요?" },

{ w:"involve", pos:"동사", ko:"수반하다, 관련시키다",
  coll:"involve a lot of work / be involved in ~",
  en:"The migration ______ rewriting most of the settlement logic.", blank:"involved",
  kx:"그 마이그레이션은 정산 로직 대부분을 다시 쓰는 일을 수반했다." },

{ w:"require", pos:"동사", ko:"필요로 하다, 요구하다",
  coll:"require approval / be required to ~",
  en:"This change ______ approval from the finance team.", blank:"requires",
  kx:"이 변경은 재무팀의 승인이 필요해요." },

{ w:"maintain", pos:"동사", ko:"유지하다; (주장을) 굽히지 않다",
  coll:"maintain a system / maintain quality",
  en:"It's getting harder to ______ this legacy codebase.", blank:"maintain",
  kx:"이 레거시 코드베이스를 유지하는 게 점점 힘들어지고 있어요." },

{ w:"determine", pos:"동사", ko:"밝혀내다, 결정하다",
  coll:"determine the cause / determine whether ~",
  en:"We couldn't ______ the cause of the mismatch.", blank:"determine",
  kx:"불일치의 원인을 밝혀내지 못했어요." },

{ w:"indicate", pos:"동사", ko:"나타내다, 시사하다",
  coll:"the data indicates that ~ / indicate a problem",
  en:"The logs ______ that the job failed twice last night.", blank:"indicate",
  kx:"로그를 보면 어젯밤 그 작업이 두 번 실패했어요." },

{ w:"occur", pos:"동사", ko:"발생하다, 일어나다",
  coll:"an error occurred / it occurred to me that ~",
  en:"The same error ______ again this morning.", blank:"occurred",
  kx:"오늘 아침에 같은 오류가 또 발생했어요." },

/* ---------- 2구간 ---------- */
{ w:"resolve", pos:"동사", ko:"해결하다; 결심하다",
  coll:"resolve an issue / resolve a conflict",
  en:"The bug has been ______, but I'd like to keep monitoring it.", blank:"resolved",
  kx:"버그는 해결됐지만 계속 지켜보고 싶어요." },

{ w:"submit", pos:"동사", ko:"제출하다",
  coll:"submit a report / submit a request",
  en:"I ______ the settlement report just before the deadline.", blank:"submitted",
  kx:"마감 직전에 정산 보고서를 제출했어요." },

{ w:"verify", pos:"동사", ko:"검증하다, 사실인지 확인하다",
  coll:"verify the data / verify a transaction",
  en:"We ______ every transaction against the bank records.", blank:"verify",
  kx:"우리는 모든 거래를 은행 기록과 대조해 검증해요." },

{ w:"reconcile", pos:"동사", ko:"(장부를) 대사하다, 맞춰보다; 화해시키다",
  coll:"reconcile accounts / reconcile the numbers  ※정산 업무의 핵심 단어",
  en:"It takes half a day to ______ last month's accounts.", blank:"reconcile",
  kx:"지난달 계정을 대사하는 데 반나절이 걸려요." },

{ w:"exceed", pos:"동사", ko:"초과하다, 넘어서다",
  coll:"exceed the limit / exceed expectations",
  en:"The response time ______ our threshold three times today.", blank:"exceeded",
  kx:"오늘 응답 시간이 우리 기준치를 세 번 초과했어요." },

{ w:"estimate", pos:"동사·명사", ko:"추정하다; 추정치, 견적",
  coll:"a rough estimate / estimate the cost",
  en:"Can you give me a rough ______ of how long it'll take?", blank:"estimate",
  kx:"얼마나 걸릴지 대략적인 추정치를 줄 수 있나요?" },

{ w:"anticipate", pos:"동사", ko:"예상하다, 미리 대비하다",
  coll:"anticipate a problem / as anticipated",
  en:"We didn't ______ this much traffic on launch day.", blank:"anticipate",
  kx:"출시일에 이렇게 트래픽이 많을 줄은 예상 못 했어요." },

{ w:"prevent", pos:"동사", ko:"막다, 예방하다",
  coll:"prevent ~ from -ing  ※전치사 from이 고정",
  en:"This check ______ duplicate payments from going through.", blank:"prevents",
  kx:"이 검사가 중복 결제가 처리되는 걸 막아줘요." },

{ w:"eliminate", pos:"동사", ko:"없애다, 제거하다",
  coll:"eliminate the need for ~ / eliminate errors",
  en:"Automating the process ______ most of the manual errors.", blank:"eliminated",
  kx:"프로세스를 자동화하니 수작업 오류 대부분이 없어졌어요." },

{ w:"implement", pos:"동사", ko:"구현하다, 시행하다",
  coll:"implement a feature / implement a policy",
  en:"We ______ the new refund policy last quarter.", blank:"implemented",
  kx:"지난 분기에 새 환불 정책을 시행했어요." },

{ w:"conduct", pos:"동사", ko:"(조사·회의를) 실시하다, 수행하다",
  coll:"conduct a survey / conduct a review  ※do보다 격식 있는 표현",
  en:"We're going to ______ a full review of the payment flow.", blank:"conduct",
  kx:"결제 흐름 전체를 검토할 예정이에요." },

{ w:"evaluate", pos:"동사", ko:"평가하다, 따져보다",
  coll:"evaluate options / evaluate performance",
  en:"Let's ______ both options before we commit.", blank:"evaluate",
  kx:"확정하기 전에 두 선택지를 다 따져봅시다." },

/* ---------- 3구간 ---------- */
{ w:"consistent", pos:"형용사", ko:"일관된; (~와) 일치하는",
  coll:"be consistent with ~ / consistent results  ※전치사 with가 고정",
  en:"These numbers aren't ______ with what the bank sent us.", blank:"consistent",
  kx:"이 숫자들이 은행이 보내준 것과 일치하지 않아요." },

{ w:"significant", pos:"형용사", ko:"상당한, 중요한, 유의미한",
  coll:"a significant difference / significant impact",
  en:"There's been a ______ drop in failed transactions.", blank:"significant",
  kx:"실패 거래가 상당히 줄었어요." },

{ w:"sufficient", pos:"형용사", ko:"충분한 (enough의 격식체)",
  coll:"sufficient evidence / sufficient time",
  en:"We didn't have ______ time to test it properly.", blank:"sufficient",
  kx:"제대로 테스트할 시간이 충분하지 않았어요." },

{ w:"reasonable", pos:"형용사", ko:"합리적인, 타당한; (가격이) 적당한",
  coll:"a reasonable request / within a reasonable time",
  en:"That sounds like a ______ request to me.", blank:"reasonable",
  kx:"제가 보기엔 타당한 요청 같아요." },

{ w:"straightforward", pos:"형용사", ko:"간단명료한, 복잡하지 않은",
  coll:"a straightforward process / fairly straightforward",
  en:"The fix turned out to be pretty ______.", blank:"straightforward",
  kx:"수정은 꽤 간단한 걸로 밝혀졌어요." },

{ w:"reluctant", pos:"형용사", ko:"꺼리는, 마음이 내키지 않는",
  coll:"be reluctant to ~  ※to부정사가 고정",
  en:"They seem ______ to change the existing process.", blank:"reluctant",
  kx:"그들은 기존 프로세스를 바꾸기를 꺼리는 것 같아요." },

{ w:"aware", pos:"형용사", ko:"알고 있는, 인지하고 있는",
  coll:"be aware of ~ / as far as I'm aware  ※전치사 of가 고정",
  en:"Are you ______ of the change to the deadline?", blank:"aware",
  kx:"마감일이 바뀐 걸 알고 계신가요?" },

{ w:"thorough", pos:"형용사", ko:"철저한, 꼼꼼한",
  coll:"a thorough check / a thorough understanding",
  en:"She did a ______ review and caught two bugs.", blank:"thorough",
  kx:"그녀가 철저히 검토해서 버그 두 개를 잡았어요." },

{ w:"inevitable", pos:"형용사", ko:"피할 수 없는, 불가피한",
  coll:"it was inevitable that ~ / an inevitable delay",
  en:"Some delay was ______ given how late we started.", blank:"inevitable",
  kx:"그렇게 늦게 시작했으니 지연은 불가피했어요." },

{ w:"ongoing", pos:"형용사", ko:"진행 중인, 계속되는",
  coll:"an ongoing issue / ongoing discussion",
  en:"It's an ______ problem — we haven't fixed it yet.", blank:"ongoing",
  kx:"계속되고 있는 문제예요 — 아직 못 고쳤어요." },

{ w:"transparent", pos:"형용사", ko:"투명한, 숨김없는",
  coll:"be transparent about ~ / a transparent process",
  en:"We try to be ______ about how the fees are calculated.", blank:"transparent",
  kx:"수수료가 어떻게 계산되는지 투명하게 공개하려고 해요." },

{ w:"valid", pos:"형용사", ko:"유효한; 타당한",
  coll:"a valid point / no longer valid",
  en:"That's a ______ point — I hadn't thought of that.", blank:"valid",
  kx:"타당한 지적이에요 — 그건 생각 못 했네요." },

/* ---------- 4구간 ---------- */
{ w:"outcome", pos:"명사", ko:"결과, 성과",
  coll:"the outcome of ~ / a positive outcome",
  en:"We're happy with the ______ of the negotiation.", blank:"outcome",
  kx:"협상 결과에 만족하고 있어요." },

{ w:"issue", pos:"명사·동사", ko:"문제, 사안; (공식적으로) 발급하다",
  coll:"raise an issue / issue a refund",
  en:"We had to ______ a refund for the duplicate charge.", blank:"issue",
  kx:"중복 청구 건에 대해 환불을 해줘야 했어요." },

{ w:"concern", pos:"명사·동사", ko:"우려, 걱정; 관련되다",
  coll:"raise a concern / as far as ~ is concerned",
  en:"My main ______ is that we haven't tested the edge cases.", blank:"concern",
  kx:"제일 걱정되는 건 예외 상황을 테스트하지 않았다는 점이에요." },

{ w:"insight", pos:"명사", ko:"통찰, 깊은 이해",
  coll:"gain insight into ~ / a valuable insight  ※전치사 into가 고정",
  en:"The data gave us useful ______ into user behavior.", blank:"insight",
  kx:"그 데이터가 사용자 행동에 대한 유용한 통찰을 줬어요." },

{ w:"scope", pos:"명사", ko:"범위, 영역",
  coll:"the scope of the project / out of scope",
  en:"That's outside the ______ of this sprint.", blank:"scope",
  kx:"그건 이번 스프린트 범위 밖이에요." },

{ w:"threshold", pos:"명사", ko:"기준점, 문턱값, 한계선",
  coll:"exceed a threshold / set a threshold",
  en:"We set the alert ______ at five failures per hour.", blank:"threshold",
  kx:"경고 기준을 시간당 5회 실패로 설정했어요." },

{ w:"discrepancy", pos:"명사", ko:"불일치, 차이 (숫자·기록이 안 맞는 것)",
  coll:"a discrepancy between A and B  ※정산 업무 필수 단어",
  en:"There's a small ______ between the two reports.", blank:"discrepancy",
  kx:"두 보고서 사이에 작은 불일치가 있어요." },

{ w:"revenue", pos:"명사", ko:"수익, 매출",
  coll:"generate revenue / revenue growth",
  en:"Monthly ______ grew by about twelve percent.", blank:"revenue",
  kx:"월 매출이 약 12퍼센트 성장했어요." },

{ w:"constraint", pos:"명사", ko:"제약, 제한 조건",
  coll:"time constraints / budget constraints",
  en:"Given the time ______, we'll ship the simple version first.", blank:"constraints",
  kx:"시간 제약을 감안해서 간단한 버전을 먼저 배포할게요." },

{ w:"initiative", pos:"명사", ko:"주도적 계획; 진취성",
  coll:"take the initiative / launch an initiative",
  en:"She took the ______ and rewrote the whole script.", blank:"initiative",
  kx:"그녀가 주도적으로 나서서 스크립트 전체를 다시 썼어요." },

{ w:"priority", pos:"명사", ko:"우선순위, 우선사항",
  coll:"a top priority / take priority over ~",
  en:"Fixing the payment bug is our top ______ right now.", blank:"priority",
  kx:"결제 버그 수정이 지금 최우선 사항이에요." },

{ w:"workaround", pos:"명사", ko:"임시 해결책, 우회 방법",
  coll:"a temporary workaround / find a workaround",
  en:"We found a ______ until the proper fix is ready.", blank:"workaround",
  kx:"제대로 된 수정이 준비될 때까지 임시 해결책을 찾았어요." },

/* ---------- 5구간: 업무 구동사 (원어민이 실제로 훨씬 자주 씀) ---------- */
{ w:"follow up", pos:"구동사", ko:"후속 조치를 하다, 다시 확인하다",
  coll:"follow up on ~ / follow up with someone  ※전치사 on/with 구분",
  en:"I'll ______ ______ with the vendor tomorrow.", blank:"follow up",
  kx:"내일 업체에 다시 연락해 볼게요." },

{ w:"look into", pos:"구동사", ko:"조사해 보다, 알아보다",
  coll:"look into a problem / I'll look into it",
  en:"Let me ______ ______ it and get back to you.", blank:"look into",
  kx:"제가 알아보고 다시 알려드릴게요." },

{ w:"reach out to", pos:"구동사", ko:"연락을 취하다, 먼저 손을 내밀다",
  coll:"reach out to someone about ~",
  en:"I'll ______ ______ ______ the finance team about this.", blank:"reach out to",
  kx:"이 건에 대해 재무팀에 연락해 볼게요." },

{ w:"come up with", pos:"구동사", ko:"(아이디어를) 생각해 내다",
  coll:"come up with a solution / come up with an idea",
  en:"Can you ______ ______ ______ a better name for this?", blank:"come up with",
  kx:"이거 더 나은 이름 좀 생각해 낼 수 있어요?" },

{ w:"account for", pos:"구동사", ko:"설명하다; (비율을) 차지하다",
  coll:"account for the difference / account for 30% of ~",
  en:"That still doesn't ______ ______ the missing ten dollars.", blank:"account for",
  kx:"그래도 10달러가 비는 건 설명이 안 되네요." },

{ w:"carry out", pos:"구동사", ko:"수행하다, 실행하다",
  coll:"carry out a test / carry out a plan",
  en:"We'll ______ ______ the migration over the weekend.", blank:"carry out",
  kx:"주말 동안 마이그레이션을 수행할 거예요." },

{ w:"sort out", pos:"구동사", ko:"정리하다, 해결하다",
  coll:"sort out a problem / sort out the details",
  en:"Let's ______ ______ the details after the meeting.", blank:"sort out",
  kx:"회의 끝나고 세부사항을 정리합시다." },

{ w:"rule out", pos:"구동사", ko:"배제하다, 가능성을 제외하다",
  coll:"rule out a possibility / can't rule out ~",
  en:"We can't ______ ______ a network issue yet.", blank:"rule out",
  kx:"아직 네트워크 문제일 가능성을 배제할 수 없어요." },

{ w:"keep in the loop", pos:"표현", ko:"계속 상황을 공유받게 하다",
  coll:"keep me in the loop / keep someone in the loop",
  en:"Could you keep me ______ ______ ______ on this?", blank:"in the loop",
  kx:"이 건 계속 공유해 주실 수 있을까요?" },

{ w:"touch base", pos:"표현", ko:"간단히 소통하다, 잠깐 상황을 나누다",
  coll:"touch base with someone / let's touch base next week",
  en:"Let's ______ ______ next week once the data is in.", blank:"touch base",
  kx:"데이터 들어오면 다음 주에 간단히 얘기해요." },

{ w:"give a heads-up", pos:"표현", ko:"미리 귀띔해 주다, 사전에 알려주다",
  coll:"give someone a heads-up about ~",
  en:"Thanks for giving me a ______ about the schedule change.", blank:"heads-up",
  kx:"일정 변경 미리 알려줘서 고마워요." },

{ w:"run by", pos:"구동사", ko:"(의견을 듣기 위해) 한번 물어보다, 검토받다",
  coll:"run something by someone",
  en:"Can I ______ ______ ______ you before the meeting?", blank:"run it by",
  kx:"회의 전에 이 아이디어 한번 봐주실 수 있어요?" },

/* ---------- 6구간: 정중하게 돌려 말하기 (약점 보완) ---------- */
{ w:"I'm afraid", pos:"표현", ko:"유감이지만 ~입니다 (부정적 소식을 부드럽게)",
  coll:"I'm afraid we can't ~ / I'm afraid that won't work  ※No라고 바로 말하지 않는 완충 표현",
  en:"______ ______ ______ we won't be able to meet that deadline.", blank:"I'm afraid",
  kx:"유감이지만 그 마감일은 못 맞출 것 같아요." },

{ w:"Would it be possible to", pos:"표현", ko:"혹시 ~할 수 있을까요? (가장 정중한 요청)",
  coll:"Would it be possible to move the meeting?  ※Can you~보다 훨씬 정중",
  en:"______ ______ ______ ______ ______ push the deadline to Friday?", blank:"Would it be possible to",
  kx:"혹시 마감일을 금요일로 미룰 수 있을까요?" },

{ w:"I was wondering if", pos:"표현", ko:"혹시 ~인지 궁금해서요 (부담 없는 부탁)",
  coll:"I was wondering if you could ~  ※과거형이라 더 공손해져요",
  en:"______ ______ ______ ______ you could take a look at this.", blank:"I was wondering if",
  kx:"혹시 이것 좀 봐주실 수 있을까 해서요." },

{ w:"It might be worth", pos:"표현", ko:"~해보는 것도 좋을 것 같아요 (부드러운 제안)",
  coll:"It might be worth checking / It might be worth considering  ※뒤에 -ing",
  en:"______ ______ ______ ______ double-checking those numbers.", blank:"It might be worth",
  kx:"그 숫자들을 한 번 더 확인해 보는 것도 좋을 것 같아요." },

{ w:"correct me if I'm wrong", pos:"표현", ko:"제가 틀렸으면 정정해 주세요 (반박을 부드럽게)",
  coll:"Correct me if I'm wrong, but ~",
  en:"______ ______ ______ ______ ______, but wasn't this already approved?", blank:"Correct me if I'm wrong",
  kx:"제가 틀렸으면 말씀해 주세요, 근데 이거 이미 승인되지 않았나요?" },

{ w:"I see your point, but", pos:"표현", ko:"말씀하신 건 이해하는데, 다만 ~ (정중한 반대)",
  coll:"I see your point, but I think ~  ※무조건 반대보다 훨씬 부드러움",
  en:"______ ______ ______ ______, but I think we should wait.", blank:"I see your point",
  kx:"말씀하신 건 이해하는데, 저는 좀 기다리는 게 좋을 것 같아요." },

{ w:"just to be safe", pos:"표현", ko:"혹시 모르니까, 만약을 위해",
  coll:"Let's back it up, just to be safe.",
  en:"Let's take a backup first, ______ ______ ______ ______.", blank:"just to be safe",
  kx:"혹시 모르니까 백업부터 해둡시다." },

{ w:"as far as I know", pos:"표현", ko:"제가 아는 한은 (단정을 피하는 표현)",
  coll:"As far as I know, ~ / As far as I'm aware, ~",
  en:"______ ______ ______ ______ ______, nothing has changed.", blank:"As far as I know",
  kx:"제가 아는 한은 바뀐 게 없어요." },

/* ---------- 7구간 ---------- */
{ w:"mitigate", pos:"동사", ko:"(위험·피해를) 완화하다, 줄이다",
  coll:"mitigate the risk / mitigate the impact",
  en:"We added retries to ______ the risk of data loss.", blank:"mitigate",
  kx:"데이터 손실 위험을 줄이려고 재시도 로직을 추가했어요." },

{ w:"facilitate", pos:"동사", ko:"수월하게 하다, 촉진하다",
  coll:"facilitate a discussion / facilitate the process",
  en:"The new tool should ______ collaboration between teams.", blank:"facilitate",
  kx:"새 도구가 팀 간 협업을 수월하게 해줄 거예요." },

{ w:"emphasize", pos:"동사", ko:"강조하다",
  coll:"emphasize the importance of ~ / I'd like to emphasize that ~",
  en:"He ______ the importance of testing before deployment.", blank:"emphasized",
  kx:"그는 배포 전 테스트의 중요성을 강조했어요." },

{ w:"justify", pos:"동사", ko:"정당화하다, 타당함을 설명하다",
  coll:"justify the cost / justify a decision",
  en:"It's hard to ______ the cost for such a small gain.", blank:"justify",
  kx:"그 정도 이득으로 그 비용을 정당화하기는 어려워요." },

{ w:"clarify", pos:"동사", ko:"명확히 하다, 분명히 설명하다",
  coll:"clarify a point / just to clarify, ~",
  en:"Could you ______ what you mean by 'pending'?", blank:"clarify",
  kx:"'pending'이 무슨 뜻인지 명확히 해주실 수 있나요?" },

{ w:"prioritize", pos:"동사", ko:"우선순위를 정하다, 먼저 처리하다",
  coll:"prioritize tasks / prioritize A over B",
  en:"We need to ______ the bug fixes over the new features.", blank:"prioritize",
  kx:"새 기능보다 버그 수정을 먼저 처리해야 해요." },

{ w:"delegate", pos:"동사", ko:"(업무를) 위임하다, 맡기다",
  coll:"delegate a task to someone",
  en:"You should ______ some of this work to the new hire.", blank:"delegate",
  kx:"이 업무 일부는 신입에게 맡기는 게 좋겠어요." },

{ w:"overlook", pos:"동사", ko:"간과하다, 못 보고 지나치다",
  coll:"overlook a detail / easily overlooked",
  en:"We ______ one edge case in the original design.", blank:"overlooked",
  kx:"원래 설계에서 예외 상황 하나를 놓쳤어요." },

{ w:"escalate", pos:"동사", ko:"(상급자·상위 단계로) 넘기다; 악화되다",
  coll:"escalate an issue to ~ / the situation escalated",
  en:"If it isn't fixed by noon, we'll ______ it to the manager.", blank:"escalate",
  kx:"정오까지 안 고쳐지면 매니저에게 넘길게요." },

{ w:"streamline", pos:"동사", ko:"간소화하다, 효율화하다",
  coll:"streamline a process / streamline operations",
  en:"The goal is to ______ the monthly closing process.", blank:"streamline",
  kx:"목표는 월 마감 프로세스를 간소화하는 거예요." },

{ w:"allocate", pos:"동사", ko:"할당하다, 배분하다",
  coll:"allocate resources / allocate a budget",
  en:"We ______ two engineers to the migration project.", blank:"allocated",
  kx:"마이그레이션 프로젝트에 엔지니어 두 명을 배정했어요." },

{ w:"compensate", pos:"동사", ko:"보상하다; (부족한 것을) 메우다",
  coll:"compensate for ~  ※전치사 for가 고정",
  en:"We offered a discount to ______ for the delay.", blank:"compensate",
  kx:"지연에 대한 보상으로 할인을 제공했어요." },

/* ---------- 8구간 ---------- */
{ w:"in light of", pos:"표현", ko:"~을 고려하면, ~에 비추어",
  coll:"In light of recent events, ~",
  en:"______ ______ ______ the new data, we should revise the plan.", blank:"In light of",
  kx:"새 데이터를 고려하면 계획을 수정해야 해요." },

{ w:"take into account", pos:"표현", ko:"고려하다, 감안하다",
  coll:"take ~ into account / taking everything into account",
  en:"We need to ______ ______ ______ the holiday schedule too.", blank:"take into account",
  kx:"공휴일 일정도 감안하셨나요?" },

{ w:"on second thought", pos:"표현", ko:"다시 생각해 보니",
  coll:"On second thought, let's ~",
  en:"______ ______ ______, let's postpone the release.", blank:"On second thought",
  kx:"다시 생각해 보니 출시를 미루는 게 낫겠어요." },

{ w:"for the time being", pos:"표현", ko:"당분간은, 우선은",
  coll:"That'll do for the time being.",
  en:"Let's keep the manual process ______ ______ ______ ______.", blank:"for the time being",
  kx:"당분간은 수동 프로세스를 유지합시다." },

{ w:"more often than not", pos:"표현", ko:"대개, 십중팔구",
  coll:"More often than not, it's a config issue.",
  en:"______ ______ ______ ______, the error is just a typo.", blank:"More often than not",
  kx:"대개 그 오류는 그냥 오타예요." },

{ w:"bear with me", pos:"표현", ko:"잠시만 기다려 주세요, 양해 부탁드려요",
  coll:"Bear with me for a second.",
  en:"______ ______ ______ for a moment while I pull up the file.", blank:"Bear with me",
  kx:"파일 여는 동안 잠시만 기다려 주세요." },

{ w:"off the top of my head", pos:"표현", ko:"지금 딱 떠오르는 대로는, 정확하진 않지만",
  coll:"Off the top of my head, I'd say around 200.",
  en:"______ ______ ______ ______ ______ ______, I'd guess about fifty.", blank:"Off the top of my head",
  kx:"지금 딱 떠오르는 대로는 한 오십 개쯤인 것 같아요." },

{ w:"get back to", pos:"구동사", ko:"나중에 다시 연락하다, 답을 주다",
  coll:"I'll get back to you on that.",
  en:"Let me check and I'll ______ ______ ______ you by Friday.", blank:"get back to",
  kx:"확인해 보고 금요일까지 답 드릴게요." },

{ w:"end up", pos:"구동사", ko:"결국 ~하게 되다",
  coll:"end up -ing / end up with ~  ※뒤에 -ing 형태",
  en:"We ______ ______ rewriting the whole thing anyway.", blank:"ended up",
  kx:"결국 어차피 전부 다시 쓰게 됐어요." },

{ w:"figure out", pos:"구동사", ko:"알아내다, 파악하다",
  coll:"figure out how to ~ / figure out a solution",
  en:"It took me two hours to ______ ______ what was wrong.", blank:"figure out",
  kx:"뭐가 문제인지 알아내는 데 두 시간 걸렸어요." },

{ w:"narrow down", pos:"구동사", ko:"범위를 좁히다",
  coll:"narrow down the options / narrow it down to ~",
  en:"We ______ ______ the list to two possible causes.", blank:"narrowed down",
  kx:"가능한 원인을 두 개로 좁혔어요." },

{ w:"back up", pos:"구동사", ko:"백업하다; (주장을) 뒷받침하다",
  coll:"back up the data / back up a claim with evidence",
  en:"Can you ______ ______ that claim with actual numbers?", blank:"back up",
  kx:"그 주장을 실제 수치로 뒷받침해 줄 수 있나요?" }

];

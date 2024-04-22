const rf = admin.securityRules().createRulesFileFromSource('firestore.rules', source);
const rs = await admin.securityRules().createRuleset(rf);
await admin.securityRules().releaseFirestoreRuleset(rs);

const source = `{
    "rules": {
      "scores": {
        ".indexOn": "score",
        "$uid": {
          ".read": "$uid == auth.uid",
          ".write": "$uid == auth.uid"
        }
      }
    }
  }`;

const allRulesets = [];
let pageToken = null;
while (true) {
    const result = await admin.securityRules().listRulesetMetadata(pageToken = `${pageToken}`);
    allRulesets.push(...result.rulesets);
    pageToken = result.nextPageToken;
    if (!pageToken) {
        break;
    }
}
await admin.database().setRules(source);
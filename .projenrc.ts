import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  constructsVersion: '10.0.5',
  typescriptVersion: '5.2.x',
  jsiiVersion: '5.2.x',
  defaultReleaseBranch: 'main',
  name: '@gammarer/aws-waf-ip-rate-limit-rule-group',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarer/aws-waf-ip-rate-limit-rule-group.git',
  description: 'This is an AWS CDK Construct for Rate Limit Rule on WAF V2.',
  keywords: ['aws', 'cdk', 'aws-cdk', 'waf', 'acl', 'rate'],
  majorVersion: 1,
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  stability: 'stable',
  minNodeVersion: '18.0.0',
  workflowNodeVersion: '20.11.0',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 19 * * 1']), // every monday (JST/THU:02:00)
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
  publishToPypi: {
    distName: 'gammarer.aws-waf-ip-rate-limit-rule-group',
    module: 'gammarer.aws_waf_ip_rate_limit_rule_group',
  },
  publishToMaven: {
    mavenGroupId: 'com.gammarer',
    javaPackage: 'com.gammarer.cdk.aws.waf_ip_rate_limit_rule_group',
    mavenArtifactId: 'aws-waf-ip-rate-limit-rule-group',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },
  publishToNuget: {
    dotNetNamespace: 'Gammarer.CDK.AWS',
    packageId: 'Gammarer.CDK.AWS.WafIpRateLimitRuleGroup',
  },
});
project.synth();
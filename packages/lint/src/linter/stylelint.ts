import type { ILintArgs } from '../types';
import BaseLinter from './base';

/**
 * linter for drive stylelint
 */
export default class StyleLinter extends BaseLinter {
  linter = 'stylelint';

  getRunArgs(args: ILintArgs) {
    return [
      '--config-basedir',
      this.paths.cwd!,
      ...(args.quiet !== false ? ['--quiet'] : []), // default no warnings
      '--allow-empty-input',
      ...(args.fix ? ['--fix'] : []),
      ...args._,
    ];
  }
}

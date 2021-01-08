# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.1](https://github.com/uStudioTeam/brix-ui/compare/2.0.0...2.1.1) (2021-01-08)


### Bug Fixes

* **docs:** update `Grid` story ([d00ca68](https://github.com/uStudioTeam/brix-ui/commit/d00ca68dd53c1ca82fe90d4420c903f4eca57ae7))


### Features

* **Cell:** update `Cell` component, now extending from `Flex` ([49cccc6](https://github.com/uStudioTeam/brix-ui/commit/49cccc6136cd830f721dbe5a3af016d9db292103))
* **Grid:** update `Grid` component, now extending from `Flex` ([3cf8b81](https://github.com/uStudioTeam/brix-ui/commit/3cf8b8106261707f2ef0b96f0a8b1c8fc783b0af))





# [2.1.0](https://github.com/uStudioTeam/brix-ui/compare/2.0.0...2.1.0) (2020-11-11)


### Bug Fixes

* **docs:** update `Grid` story ([eab8fa5](https://github.com/uStudioTeam/brix-ui/commit/eab8fa5792706ef24382b17f60558b6daa15493c))


### Features

* **Cell:** update `Cell` component, now extending from `Flex` ([76622da](https://github.com/uStudioTeam/brix-ui/commit/76622da7231d9f64495b6b91224b8e8926a345e2))
* **Grid:** update `Grid` component, now extending from `Flex` ([9e099f6](https://github.com/uStudioTeam/brix-ui/commit/9e099f68838fb6b86465cd2aea6f2d2eaabfe73e))





# [2.0.0](https://github.com/uStudioTeam/brix-ui/compare/v2.0.0-rc.1...2.0.0) (2020-11-05)

**Note:** Version bump only for package @brix-ui/grid





# 2.0.0-rc.1 (2020-10-28)


### Bug Fixes

* Fix `IntrinsicComponent` type definition ([4e704ad](https://github.com/uStudioTeam/brix-ui/commit/4e704adce9fb269e18936ff4a25a2210ec2cba42))
* Fix usage of `extract` prop-types function ([ef0efdf](https://github.com/uStudioTeam/brix-ui/commit/ef0efdfcfd9a670ed4c49b1fea61fe20d150eca1))
* Properly load svg icons ([cdc4de4](https://github.com/uStudioTeam/brix-ui/commit/cdc4de4ccf0b74725d165f5ef13d03b2eb66b1f8))
* **grid:** Correctly destructure breakpoints from theme ([8435bcb](https://github.com/uStudioTeam/brix-ui/commit/8435bcb84bc6ad5fcd83910226f07d7720faa3ea))
* **grid:** Fix `useBreakpointProps` typing in `GridContainer` ([765dc12](https://github.com/uStudioTeam/brix-ui/commit/765dc12b07910fe3d142a9f567cafb3d796074de))
* **grid:** Update grid state with latest data ([d2ca58c](https://github.com/uStudioTeam/brix-ui/commit/d2ca58c97cc017299a7565a7bd3774771d08cad2))


### Features

* Update packages with new theme usage ([4262227](https://github.com/uStudioTeam/brix-ui/commit/426222705b198a1f8aa1326c91907c98a5557f62))
* **storybook:** Properly setup props table generation ([67a1e15](https://github.com/uStudioTeam/brix-ui/commit/67a1e150fcf97f8def6ea52f8416ad5465afc5c8))
* **theme:** Move `useTheme` to `hooks` folder ([b52694f](https://github.com/uStudioTeam/brix-ui/commit/b52694f894c8936bac446e8591ef089afd72cb2f))
* Add `fonts` package ([520dac1](https://github.com/uStudioTeam/brix-ui/commit/520dac1be641aa04a433ccc0c8dec467ff429c03))
* Add `PolymorphicBreakpointProp` type ([75b3c4f](https://github.com/uStudioTeam/brix-ui/commit/75b3c4fb62bc542ce80804b328ff3bab73ec5e37))
* Add palette ([4c1b36c](https://github.com/uStudioTeam/brix-ui/commit/4c1b36ca177f750a242da4f9af12467e2fda677b))
* Add prop-types packages ([617ff5d](https://github.com/uStudioTeam/brix-ui/commit/617ff5d338b5dcb14b9a7ba00d76157a78d03a27))
* Add prop-types utils ([7259afa](https://github.com/uStudioTeam/brix-ui/commit/7259afa5bb8c745f118e63274b1df3f61b5f7795))
* Add prop-types validation ([96f021d](https://github.com/uStudioTeam/brix-ui/commit/96f021d18845da1dd9374981287a557b356d0d3a))
* Change `BreakpointsProps` type signature ([55f4ecc](https://github.com/uStudioTeam/brix-ui/commit/55f4ecc3d9152187d000c2b6c50d252af8c3709d))
* Create all components through `intrinsic-component` function ([d25d95b](https://github.com/uStudioTeam/brix-ui/commit/d25d95b5f33568b274efd654402bf3d7d927a98d))
* Export all styled components through `apply-display-name` function ([1dfd0c5](https://github.com/uStudioTeam/brix-ui/commit/1dfd0c54b2460fb8292747f5d2505fce59615e49))
* Extend `StylableComponent` in implemented components ([b35fb14](https://github.com/uStudioTeam/brix-ui/commit/b35fb140453e9daf52b113b69663fa82720977f8))
* Set all classNames through `classNames` util function ([b55a430](https://github.com/uStudioTeam/brix-ui/commit/b55a43057ac83181092f75711c3770bb117ce9d7))
* Update breakpoint-props related functionality ([333ccf7](https://github.com/uStudioTeam/brix-ui/commit/333ccf7f5ae4a64db51c5945fec6dbec9e8d818f))
* **contexts:** Rename `DirectionProvider` -> `Direction` ([70080a3](https://github.com/uStudioTeam/brix-ui/commit/70080a338bd493ea5d5586dd883b46dcdce1efed))
* **hooks:** Add `hooks` package ([9f4b3c6](https://github.com/uStudioTeam/brix-ui/commit/9f4b3c6827243ac28fc00eea5ce3a8b0c64d43ba))
* Migrate to storybook v6 ([d4a2d0b](https://github.com/uStudioTeam/brix-ui/commit/d4a2d0bb71c517bf64707bdcd6f9026b2a21d683))
* Update typescript configuration for building ([cb11ce0](https://github.com/uStudioTeam/brix-ui/commit/cb11ce0ff7fccef7088f9fc9c9ca9c615a8ab2fb))
* **Disclosure:** Add `Disclosure` component ([da9739b](https://github.com/uStudioTeam/brix-ui/commit/da9739bee942aa7bb50741f119aacc61dee70149))
* **grid:** Add index export ([0ca83af](https://github.com/uStudioTeam/brix-ui/commit/0ca83af77e66bbbab4e7a18e9a398bca3783852f))
* **grid:** Add more props, refactor styles and logic ([0ba660d](https://github.com/uStudioTeam/brix-ui/commit/0ba660d695035b202965036dcd99190b2e33fbf0))
* **grid:** Add proper name to the package references ([c67beeb](https://github.com/uStudioTeam/brix-ui/commit/c67beebc58e4cfd392c12d9dc735d1ce8f429c98))
* **grid:** Add story ([7964585](https://github.com/uStudioTeam/brix-ui/commit/7964585df0d60f8475c7f95d0bb48dbf842d43f0))
* **grid:** Rename `grid-system` -> `grid`, `grid` -> `grid-container` ([b1db8f8](https://github.com/uStudioTeam/brix-ui/commit/b1db8f8e4d69f0edac315af71b1f7682933ff344))
* **grid:** Restore old names for grid components, add named exports from root ([253a98a](https://github.com/uStudioTeam/brix-ui/commit/253a98a22c6ef767c58a64637620fc1a7f2d6ba2))
* **Theme:** move fonts to the default theme, update palette, add palette story, add theme modes ([961e7be](https://github.com/uStudioTeam/brix-ui/commit/961e7beb70907dcfb3e0b0de25138e144b283db0))
* Move all color manipulations to `polished` ([043b6a5](https://github.com/uStudioTeam/brix-ui/commit/043b6a574e54e79fdc488c747af5e0064ef5e066))
* **grid:** Apply `gap` changes from `Block` ([05b45fa](https://github.com/uStudioTeam/brix-ui/commit/05b45fa1ff6f85771abf3ea5fe8d7573e7b6d62f))

(function() {var implementors = {
"core_simd":[["impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u64.html\">u64</a>, N&gt;<div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"core_simd/simd/trait.SimdElement.html\" title=\"trait core_simd::simd::SimdElement\">SimdElement</a>,\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;N&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</div>"],["impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>, N&gt;<div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>: <a class=\"trait\" href=\"core_simd/simd/trait.SimdElement.html\" title=\"trait core_simd::simd::SimdElement\">SimdElement</a>,\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;N&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</div>"],["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"core_simd/simd/struct.Mask.html\" title=\"struct core_simd::simd::Mask\">Mask</a>&lt;T, N&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"core_simd/simd/trait.MaskElement.html\" title=\"trait core_simd::simd::MaskElement\">MaskElement</a>,\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;N&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</div>"],["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;&amp;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;T, N&gt;&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;T, N&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"core_simd/simd/trait.SimdElement.html\" title=\"trait core_simd::simd::SimdElement\">SimdElement</a>,\n    <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;T, N&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;T, N&gt;, Output = <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;T, N&gt;&gt;,\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;N&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</div>"],["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;T, N&gt;&gt; for &amp;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;T, N&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"core_simd/simd/trait.SimdElement.html\" title=\"trait core_simd::simd::SimdElement\">SimdElement</a>,\n    <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;T, N&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;T, N&gt;, Output = <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;T, N&gt;&gt;,\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;N&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</div>"],["impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>, N&gt;<div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>: <a class=\"trait\" href=\"core_simd/simd/trait.SimdElement.html\" title=\"trait core_simd::simd::SimdElement\">SimdElement</a>,\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;N&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</div>"],["impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u16.html\">u16</a>, N&gt;<div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u16.html\">u16</a>: <a class=\"trait\" href=\"core_simd/simd/trait.SimdElement.html\" title=\"trait core_simd::simd::SimdElement\">SimdElement</a>,\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;N&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</div>"],["impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i8.html\">i8</a>, N&gt;<div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i8.html\">i8</a>: <a class=\"trait\" href=\"core_simd/simd/trait.SimdElement.html\" title=\"trait core_simd::simd::SimdElement\">SimdElement</a>,\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;N&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</div>"],["impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u32.html\">u32</a>, N&gt;<div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u32.html\">u32</a>: <a class=\"trait\" href=\"core_simd/simd/trait.SimdElement.html\" title=\"trait core_simd::simd::SimdElement\">SimdElement</a>,\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;N&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</div>"],["impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i64.html\">i64</a>, N&gt;<div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i64.html\">i64</a>: <a class=\"trait\" href=\"core_simd/simd/trait.SimdElement.html\" title=\"trait core_simd::simd::SimdElement\">SimdElement</a>,\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;N&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</div>"],["impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i32.html\">i32</a>, N&gt;<div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i32.html\">i32</a>: <a class=\"trait\" href=\"core_simd/simd/trait.SimdElement.html\" title=\"trait core_simd::simd::SimdElement\">SimdElement</a>,\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;N&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</div>"],["impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.isize.html\">isize</a>, N&gt;<div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.isize.html\">isize</a>: <a class=\"trait\" href=\"core_simd/simd/trait.SimdElement.html\" title=\"trait core_simd::simd::SimdElement\">SimdElement</a>,\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;N&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</div>"],["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"core_simd/simd/struct.Mask.html\" title=\"struct core_simd::simd::Mask\">Mask</a>&lt;T, N&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"core_simd/simd/trait.MaskElement.html\" title=\"trait core_simd::simd::MaskElement\">MaskElement</a>,\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;N&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</div>"],["impl&lt;'lhs, 'rhs, T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;&amp;'rhs <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;T, N&gt;&gt; for &amp;'lhs <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;T, N&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"core_simd/simd/trait.SimdElement.html\" title=\"trait core_simd::simd::SimdElement\">SimdElement</a>,\n    <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;T, N&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;T, N&gt;, Output = <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;T, N&gt;&gt;,\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;N&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</div>"],["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"core_simd/simd/struct.Mask.html\" title=\"struct core_simd::simd::Mask\">Mask</a>&lt;T, N&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"core_simd/simd/trait.MaskElement.html\" title=\"trait core_simd::simd::MaskElement\">MaskElement</a>,\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;N&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</div>"],["impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a> for <a class=\"struct\" href=\"core_simd/simd/struct.Simd.html\" title=\"struct core_simd::simd::Simd\">Simd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i16.html\">i16</a>, N&gt;<div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.i16.html\">i16</a>: <a class=\"trait\" href=\"core_simd/simd/trait.SimdElement.html\" title=\"trait core_simd::simd::SimdElement\">SimdElement</a>,\n    <a class=\"struct\" href=\"core_simd/simd/struct.LaneCount.html\" title=\"struct core_simd::simd::LaneCount\">LaneCount</a>&lt;N&gt;: <a class=\"trait\" href=\"core_simd/simd/trait.SupportedLaneCount.html\" title=\"trait core_simd::simd::SupportedLaneCount\">SupportedLaneCount</a>,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
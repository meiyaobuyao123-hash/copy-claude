// Module: QQ2
// Params: AQ2

Object.defineProperty(AQ2, '__esModule', { value: !0 });
AQ2.recognizedOptions = void 0;
AQ2.channelOptionsEqual = pu6;
AQ2.recognizedOptions = {
  'grpc.ssl_target_name_override': !0,
  'grpc.primary_user_agent': !0,
  'grpc.secondary_user_agent': !0,
  'grpc.default_authority': !0,
  'grpc.keepalive_time_ms': !0,
  'grpc.keepalive_timeout_ms': !0,
  'grpc.keepalive_permit_without_calls': !0,
  'grpc.service_config': !0,
  'grpc.max_concurrent_streams': !0,
  'grpc.initial_reconnect_backoff_ms': !0,
  'grpc.max_reconnect_backoff_ms': !0,
  'grpc.use_local_subchannel_pool': !0,
  'grpc.max_send_message_length': !0,
  'grpc.max_receive_message_length': !0,
  'grpc.enable_http_proxy': !0,
  'grpc.enable_channelz': !0,
  'grpc.dns_min_time_between_resolutions_ms': !0,
  'grpc.enable_retries': !0,
  'grpc.per_rpc_retry_buffer_size': !0,
  'grpc.retry_buffer_size': !0,
  'grpc.max_connection_age_ms': !0,
  'grpc.max_connection_age_grace_ms': !0,
  'grpc-node.max_session_memory': !0,
  'grpc.service_config_disable_resolution': !0,
  'grpc.client_idle_timeout_ms': !0,
  'grpc-node.tls_enable_trace': !0,
  'grpc.lb.ring_hash.ring_size_cap': !0,
  'grpc-node.retry_max_attempts_limit': !0,
  'grpc-node.flow_control_window': !0,
};
function pu6(A, B) {
  let Q = Object.keys(A).sort(),
    I = Object.keys(B).sort();
  if (Q.length !== I.length) return !1;
  for (let G = 0; G < Q.length; G += 1) {
    if (Q[G] !== I[G]) return !1;
    if (A[Q[G]] !== B[I[G]]) return !1;
  }
  return !0;
}
